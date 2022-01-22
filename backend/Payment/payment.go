/*
	Payment service:
		Handle payment request
		Reveal QnA answer to payment request
*/

package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	model "github.com/ZacharyHRQ/ETI-Payment/backend/model"
	"github.com/gorilla/mux"
)

/*
setting content type to application/json and access control to allow all origins due
to cross origin resource sharing policy as request from fronted are blocked by the browser
as both the frontend server and passenger server are running on different ports but on
the same localhost.
*/

func commonMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		next.ServeHTTP(w, r)
	})
}

func welcome(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "%s", "Welcome to Payment service")
}

func revealAnswer(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	senderWalletID := vars["walletid"]
	if r.Header.Get("Content-Type") != "application/json" && r.Method == "POST" {
		var transaction model.Transaction
		reqBody, err := ioutil.ReadAll(r.Body)
		if err == nil {
			transaction.SenderWalletId = senderWalletID
			json.Unmarshal(reqBody, &transaction)
			fmt.Println(transaction)
			sendTransaction(transaction.SenderWalletId, transaction.ReceiverWalletId, transaction.TokenId, transaction.NumTokens)
			recordTransaction(transaction)
			fmt.Fprintf(w, "%s", "Transaction recorded")
			w.WriteHeader(http.StatusCreated)
		} else {
			w.WriteHeader(
				http.StatusUnprocessableEntity)
			w.Write([]byte("422 - Please supply transaction information " +
				"in JSON format"))

		}
	}
}

// TODO: Check if wallet has enough funds
// func checkWallet() {

// }

func recordTransaction(transaction model.Transaction) (err error) {
	jsonValue, _ := json.Marshal(transaction)
	const baseURL = "http://localhost:9232/api/v1/transactions/createTransaction"
	request, err := http.NewRequest(http.MethodPost, baseURL, bytes.NewBuffer(jsonValue))
	request.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(request)

	if err != nil {
		log.Fatal(err)
		return err
	} else {
		fmt.Println(resp.StatusCode)
	}
	defer request.Body.Close()
	return nil

}

func sendTransaction(senderWalletID, receiverWalletID, tokenID string, numTokens int) (err error) {
	jsonValue, _ := json.Marshal(map[string]string{"tokentypename": tokenID, "transactiontype": "Reveal Answers", "Amount": string(numTokens)})
	baseURL := "http://localhost:9072/api/v1/Transactions/" + senderWalletID
	request, err := http.NewRequest(http.MethodPut, baseURL, bytes.NewBuffer(jsonValue))
	request.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(request)

	if err != nil {
		log.Fatal(err)
		return err
	} else {
		fmt.Println(resp.StatusCode)
	}
	defer request.Body.Close()
	return nil
}

/*
	Save QnA answer to database for revealing to paid user
*/

func main() {
	router := mux.NewRouter()
	router.Use(commonMiddleware) //setting context to "json" n cors error

	// routes
	router.HandleFunc("/", welcome)
	router.HandleFunc("/api/v1/payment/reveal/{walletid}/", revealAnswer).Methods(
		"POST")
	fmt.Println("Listening at port 9232")

	log.Fatal(http.ListenAndServe(":9232", router))

}
