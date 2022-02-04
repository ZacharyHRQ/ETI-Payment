/*
	Transaction service:
		Create Transaction
		Get Transactions
*/

package main

import (
	"crypto/sha256"
	"database/sql"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"
	"time"

	model "github.com/ZacharyHRQ/ETI-Payment/backend/model"

	"github.com/gorilla/mux"

	"github.com/go-sql-driver/mysql"
)

// @title EduFi 3.18 Transaction Service API documentation
// @version 1.0.0
// @host localhost:9231
// @BasePath /api/v1

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

// set seed for generating transaction hash
func init() {
	rand.Seed(time.Now().UnixNano())
}

// generate transaction hash using senderwalletid , receiverwalletid , tokenid and numtokens
func generateNewTransactionHash(Sw, Rw, Ai, Ti string, Nt int) string {
	transactionString := Sw + Rw + Ai + Ti + string(Nt)
	hash := sha256.New()
	hash.Write([]byte(transactionString))
	return hex.EncodeToString(hash.Sum(nil))
}

func welcome(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "%s", "Welcome to Transaction service")
}

// change to query rows
/*
	gets all passengers from the db and returns a map of passenger ids and passenger objects
*/
func fetchAllTransactionsById(walletId string) ([]model.Transaction, error) {
	db := connectDB() // connect to db
	defer db.Close()
	transactionList := make([]model.Transaction, 0)

	rows, err := db.Query("SELECT * FROM Transaction WHERE SenderWalletId = ?", walletId)
	if err != nil {
		return nil, fmt.Errorf("%v", err)
	}
	defer rows.Close()

	for rows.Next() {
		var transaction model.Transaction
		if err := rows.Scan(&transaction.TransactionId, &transaction.TransactionTimeStamp, &transaction.SenderWalletId, &transaction.ReceiverWalletId, &transaction.AnswerId, &transaction.TokenId, &transaction.NumTokens); err != nil {
			return nil, fmt.Errorf("%v", err)
		}
		transactionList = append(transactionList, transaction)

	}
	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("%v", err)
	}
	return transactionList, nil
}

/*
	handler for route '/api/v1/transactions/{walletId}', returns the transactions  by the {walletId}
*/

// Get transactions  ... Get transactions for a wallet
// @Summary Get transactions for a wallet based on supply wallet id
// @Description Get transactions for a wallet based on supply wallet id
// @Tags Students
// @Accept json
// @Param walletid path model.Transaction true "Wallet ID"
// @Success 200
// @Failure 404
// @Router /api/v1/transactions/{walletId} [get]
func getTransactionsByWalletId(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id := params["walletId"]
	fmt.Println(id)
	fetchedTransactionData, _ := fetchAllTransactionsById(id)
	fmt.Println(fetchedTransactionData)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(fetchedTransactionData)
}

/*
	inserting a new transaction into the db
*/
func insertTransaction(Sw, Rw, Ai, Ti string, Nt int) {
	// insert passenger into db
	db := connectDB() // connect to db
	defer db.Close()
	transactionHash := generateNewTransactionHash(Sw, Rw, Ai, Ti, Nt)
	stmt, err := db.Prepare("INSERT INTO Transaction (TransactionId, SenderWalletId, ReceiverWalletId, AnswerId, TokenId, NumTokens)  VALUES (?,?,?,?,?)")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()

	_, err = stmt.Exec(transactionHash, Sw, Rw, Ai, Ti, Nt)
	if err != nil {
		log.Fatal(err)
	}

}

// Create transactions  ... Create transactions
// @Summary Create transactions
// @Description Create transactions to add into the db
// @Tags Students
// @Accept json
// @Success 200
// @Failure 404
// @Router /api/v1/transactions/createTransaction [post]

func createTransaction(w http.ResponseWriter, r *http.Request) {
	var transaction model.Transaction

	rb, err := ioutil.ReadAll(r.Body)
	if err == nil {
		// convert JSON to object
		json.Unmarshal(rb, &transaction)
		fmt.Println(transaction)
		insertTransaction(transaction.SenderWalletId, transaction.ReceiverWalletId, transaction.AnswerId, transaction.TokenId, transaction.NumTokens)
		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(transaction)
	} else {
		w.WriteHeader(
			http.StatusUnprocessableEntity)
		w.Write([]byte("422 - Please supply transaction information " +
			"in JSON format"))
	}
}

func connectDB() (db *sql.DB) {
	// Get a database handle.
	var err error
	db, err = sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}

	pingErr := db.Ping() // check if the connection is alive
	if pingErr != nil {
		log.Fatal(pingErr)
	}
	fmt.Println("Connected!") // if connection is alive, print "Connected!"
	return db
}

// setting up db connection
var cfg = mysql.Config{
	User:                 "root",
	Passwd:               "123",
	Net:                  "tcp",
	Addr:                 "edufi3.18-mysql:3306",
	DBName:               "Payment",
	AllowNativePasswords: true,
}

func main() {
	router := mux.NewRouter()
	router.Use(commonMiddleware) //setting context to "json" n cors error

	// routes
	router.HandleFunc("/", welcome)
	router.HandleFunc("/api/v1/transactions/{walletId}", getTransactionsByWalletId).Methods(
		"GET")
	router.HandleFunc("/api/v1/transactions/createTransaction", createTransaction).Methods(
		"POST")

	fmt.Println("Listening at port 9231")
	log.Fatal(http.ListenAndServe(":9231", router))

}
