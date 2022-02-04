/*
	Payment service:
		Handle payment request
		Reveal QnA answer to payment request
*/

package main

// @title EduFi 3.18 Payment Service API documentation
// @version 1.0.0
// @host localhost:9232
// @BasePath /api/v1

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"

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

// revealAnswer  ... Reveal answer to payment request
// @Summary Reveal answer to payment request
// @Description Reveal answer to payment request and record transaction
// @Tags Students
// @Accept json
// @Param walletid path model.Transaction true "Wallet ID"
// @Success 200
// @Failure 404
// @Router /api/v1/payment/reveal/{walletid}/ [post]

func revealAnswer(w http.ResponseWriter, r *http.Request) {
	if r.Header.Get("Content-Type") == "application/json" && r.Method == "POST" {
		var transaction model.Transaction
		reqBody, err := ioutil.ReadAll(r.Body)
		if err != nil {
			w.WriteHeader(
				http.StatusUnprocessableEntity)
			w.Write([]byte("422 - Please supply transaction information " +
				"in JSON format"))
		}

		json.Unmarshal(reqBody, &transaction)
		fmt.Println(transaction)

		doesWalletHaveFunds := checkWallet(transaction.SenderWalletId, transaction.TokenId, transaction.NumTokens)
		if !doesWalletHaveFunds {
			w.WriteHeader(http.StatusUnprocessableEntity)
			w.Write([]byte("422 - Wallet does not have enough funds"))
			return
		}

		sendTransaction(transaction.SenderWalletId, transaction.ReceiverWalletId, transaction.TokenId, transaction.NumTokens)
		recordTransaction(transaction)
		fmt.Fprintf(w, "%s", "Transaction recorded")
		w.WriteHeader(http.StatusCreated)
	}
}

func checkWallet(senderWallerId, tokenId string, Numtokens int) bool {
	baseURL := "http://mockdb:9233/api/v1/wallet/getBalance/" + senderWallerId + "/" + tokenId
	request, _ := http.NewRequest(http.MethodGet, baseURL, nil)
	request.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(request)

	if err != nil {
		log.Fatal(err)
		return false
	} else {
		fmt.Println(resp.StatusCode)
	}
	defer request.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal(err)
		return false
	}
	var result map[string]interface{}
	json.Unmarshal([]byte(body), &result)
	return Numtokens > result["balance"].(int)

}

func recordTransaction(transaction model.Transaction) (err error) {
	jsonValue, _ := json.Marshal(transaction)
	const baseURL = "http://transaction:9231/api/v1/transactions/createTransaction"
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

func checkIfWalletServiceIsUp() bool {
	const baseURL = "http://localhost:9072/"
	request, _ := http.NewRequest(http.MethodGet, baseURL, nil)
	request.Header.Set("Content-Type", "application/json")
	resp, err := http.Get("http://localhost:9072/")
	if err != nil {
		print(err.Error())
	}
	return resp.StatusCode == 200
}

func sendTransaction(senderWalletID, receiverWalletID, tokenID string, numTokens int) (err error) {
	var jsonValue []byte
	var baseURL string

	isWalletServiceUp := checkIfWalletServiceIsUp()
	if isWalletServiceUp {
		jsonValue, _ = json.Marshal(map[string]string{"StudentID": senderWalletID, "ToStudentID": receiverWalletID, "tokentypename": tokenID, "transactiontype": "Reveal Answers", "Amount": strconv.Itoa(numTokens)})
		baseURL = "http://localhost:9072/api/v1/Transactions/maketransaction/" + senderWalletID
	} else {
		baseURL = "http://mockdb:9233/api/v1/wallet/makePayment/"
		jsonValue, _ = json.Marshal(map[string]string{"senderwalletid": senderWalletID, "receiverwalletid": receiverWalletID, "module": tokenID, "numTokens": strconv.Itoa(numTokens)})
	}

	fmt.Printf("Sending transaction to wallet service")
	request, err := http.NewRequest(http.MethodPost, baseURL, bytes.NewBuffer(jsonValue))
	request.Header.Set("Content-Type", "application/json")
	if err != nil {
		log.Fatal(err)
	}

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

func main() {
	router := mux.NewRouter()
	router.Use(commonMiddleware) //setting context to "json" n cors error

	// routes
	router.HandleFunc("/", welcome)
	router.HandleFunc("/api/v1/payment/reveal/", revealAnswer).Methods(
		"POST")
	fmt.Println("Listening at port 9232")

	log.Fatal(http.ListenAndServe(":9232", router))

}
