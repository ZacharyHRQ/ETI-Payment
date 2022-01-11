/*
	Transaction service:
		Create Transaction
		Get Transactions
*/

package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	model "backend/Transactions/model"

	"github.com/gorilla/mux"

	"github.com/go-sql-driver/mysql"
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
	fmt.Fprintf(w, "%s", "Welcome to Transaction service")
}

/*
	gets all passengers from the db and returns a map of passenger ids and passenger objects
*/
func getTransactions(db *sql.DB) (map[string]model.Transaction, error) {
	tMap := make(map[string]model.Transaction)

	rows, err := db.Query("SELECT * FROM Transaction")
	if err != nil {
		return nil, fmt.Errorf("%v", err)
	}
	defer rows.Close()

	for rows.Next() {
		var transaction model.Transaction
		if err := rows.Scan(&transaction.TransactionId, &transaction.SenderWalletId, &transaction.ReceiverWalletId, &transaction.TokenId, &transaction.NumTokens); err != nil {
			return nil, fmt.Errorf("%v", err)
		}
		tMap[transaction.TransactionId] = transaction
	}
	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("%v", err)
	}
	return tMap, nil
}

/*
	handler for route '/api/v1/passenger/{walletId}', returns the passenger by the {passengerid}
*/
func getTransactionsById(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id := params["walletId"]
	fmt.Println(id)
	fetchedTransactionData, _ := getTransactions(db)
	fmt.Println(fetchedTransactionData)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(fetchedTransactionData[id])
}

/*
	inserting a new transaction into the db
*/
func insertPassenger(db *sql.DB, fN, lN, mN, eA string) {
	// insert passenger into db
	stmt, err := db.Prepare("INSERT INTO Transaction (SenderWalletId, ReceiverWalletId, TokenId, NumTokens)  VALUES (?,?,?,?)")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()

	_, err = stmt.Exec(fN, lN, mN, eA)
	if err != nil {
		log.Fatal(err)
	}

}

func createTransaction(w http.ResponseWriter, r *http.Request) {
	var transaction model.Transaction
	rb, err := ioutil.ReadAll(r.Body)
	if err == nil {
		// convert JSON to object
		json.Unmarshal(rb, &transaction)
		fmt.Println(transaction)
		insertPassenger(db, transaction.SenderWalletId, transaction.ReceiverWalletId, transaction.TokenId, transaction.NumTokens)
		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(transaction)
	} else {
		w.WriteHeader(
			http.StatusUnprocessableEntity)
		w.Write([]byte("422 - Please supply transaction information " +
			"in JSON format"))
	}
}

var db *sql.DB

func main() {
	// setting up db connection
	cfg := mysql.Config{
		User:                 "root",
		Passwd:               "123",
		Net:                  "tcp",
		Addr:                 "127.0.0.1:3306",
		DBName:               "Payment",
		AllowNativePasswords: true,
	}
	// Get a database handle.
	var err error
	db, err = sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	pingErr := db.Ping() // check if the connection is alive
	if pingErr != nil {
		log.Fatal(pingErr)
	}
	fmt.Println("Connected!") // if connection is alive, print "Connected!"

	router := mux.NewRouter()
	router.Use(commonMiddleware) //setting context to "json" n cors error

	// routes
	router.HandleFunc("/", welcome)
	router.HandleFunc("/api/v1/transaction/{walletId}", getTransactionsById).Methods(
		"GET")
	router.HandleFunc("/api/v1/transaction/createTransaction", createTransaction).Methods(
		"POST")
	fmt.Println("Listening at port 9232")
	log.Fatal(http.ListenAndServe(":9232", router))

}
