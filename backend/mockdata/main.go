package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"

	"github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

type Wallet struct {
	WalletId  string `json:"walletid"`
	StudentId string `json:"studentid"`
	TokenId   string `json:"tokenid"`
	NumTokens int    `json:"numtokens"`
}

type Question struct {
	QuestionId string `json:"questionid"`
	StudentId  string `json:"studentid"`
	Title      string `json:"title"`
	Content    string `json:"content"`
	Module     string `json:"module"`
}

type Answer struct {
	AnswerId   string `json:"answerid"`
	QuestionId string `json:"walletid"`
	StudentId  string `json:"studentid"`
	Content    string `json:"content"`
}

// middleware for setting header to json only
func commonMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		next.ServeHTTP(w, r)
	})
}

// setting up db connection
var cfg = mysql.Config{
	User:                 "root",
	Passwd:               "123",
	Net:                  "tcp",
	Addr:                 "edufi3.18-mysql:3306",
	DBName:               "mockdb",
	AllowNativePasswords: true,
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

func welcome(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>%s</h1>", "Welcome to S10185319-mockdata service")
}

func getWalletBalance(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id := params["walletId"]
	module := params["module"]
	fmt.Println(id)
	fetchedWalletData, _ := fetchWalletById(id, module)
	fmt.Println(fetchedWalletData)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(fetchedWalletData)
}

func fetchWalletById(walletId, module string) (Wallet, error) {
	db := connectDB()
	defer db.Close()

	stmt, err := db.Prepare("SELECT * FROM Wallet WHERE StudentId = ? AND TokenId = ?")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()

	var wallet Wallet
	err = stmt.QueryRow(walletId, module).Scan(&wallet.WalletId, &wallet.StudentId, &wallet.TokenId, &wallet.NumTokens)
	if err != nil {
		log.Fatal(err)
	}

	return wallet, err
}

func getAllWallet(w http.ResponseWriter, r *http.Request) {
	fetchedWalletData, _ := fetchWallets()
	fmt.Println(fetchedWalletData)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(fetchedWalletData)
}

func fetchWallets() ([]Wallet, error) {
	db := connectDB()
	defer db.Close()

	var wallets []Wallet
	rows, err := db.Query("SELECT DISTINCT StudentId FROM Wallet")
	if err != nil {
		log.Fatal(err)
	}
	for rows.Next() {
		var wallet Wallet
		err = rows.Scan(&wallet.WalletId, &wallet.StudentId, &wallet.TokenId, &wallet.NumTokens)
		if err != nil {
			log.Fatal(err)
		}
		wallets = append(wallets, wallet)
	}
	return wallets, err
}

func makePayment(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		body, err := ioutil.ReadAll(r.Body)
		if err != nil {
			log.Fatal(err)
			w.WriteHeader(http.StatusUnprocessableEntity)
			w.Write([]byte("422- Please supply driver information in JSON format"))
		}
		var result map[string]interface{}
		json.Unmarshal([]byte(body), &result)
		senderwallet := result["senderwalletid"].(string)
		receiverwallet := result["receiverwalletid"].(string)
		module := result["module"].(string)
		numTokens, _ := strconv.Atoi(result["numTokens"].(string))

		err = creditWallet(senderwallet, module, numTokens)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("%s", "Credit successful")

		err = debitWallet(receiverwallet, module, numTokens)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("%s", "Debit successful")

		w.WriteHeader(http.StatusOK)
	}
}

func creditWallet(walletId, module string, numtokens int) error {
	db := connectDB()
	defer db.Close()

	stmt, err := db.Prepare("UPDATE Wallet SET NumTokens=NumTokens-? WHERE StudentId = ? AND TokenId = ?")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()

	_, err = stmt.Exec(numtokens, walletId, module)
	if err != nil {
		log.Fatal(err)
	}

	return err
}

func debitWallet(walletId, module string, numtokens int) error {
	db := connectDB()
	defer db.Close()

	stmt, err := db.Prepare("UPDATE Wallet SET NumTokens=NumTokens+? WHERE StudentId = ? AND TokenId = ?")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()

	_, err = stmt.Exec(numtokens, walletId, module)
	if err != nil {
		log.Fatal(err)
	}

	return err
}

func getQuestions(w http.ResponseWriter, r *http.Request) {
	fetchedQuestionData, _ := fetchQuestionData()
	fmt.Println(fetchedQuestionData)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(fetchedQuestionData)
}

func fetchQuestionData() ([]Question, error) {
	db := connectDB()
	defer db.Close()

	var questions []Question
	rows, err := db.Query("SELECT * FROM Question")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next() {
		var question Question
		err := rows.Scan(&question.QuestionId, &question.StudentId, &question.Title, &question.Content, &question.Module)
		if err != nil {
			log.Fatal(err)
		}
		questions = append(questions, question)
	}
	return questions, err
}

func getAnswers(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id := params["QuestionId"]
	fetchAnswers, _ := fetchAnswerById(id)
	fmt.Println(fetchAnswers)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(fetchAnswers)
}

func fetchAnswerById(qId string) ([]Answer, error) {
	db := connectDB()
	defer db.Close()

	var answers []Answer
	rows, err := db.Query("SELECT * FROM Answer WHERE QuestionId = ?", qId)
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next() {
		var answer Answer
		err := rows.Scan(&answer.AnswerId, &answer.QuestionId, &answer.StudentId, &answer.Content)
		if err != nil {
			log.Fatal(err)
		}
		answers = append(answers, answer)
	}
	return answers, err
}

func main() {
	router := mux.NewRouter()
	router.Use(commonMiddleware) //setting context to "json"
	router.HandleFunc("/", welcome)

	router.HandleFunc("/api/v1/wallet/getBalance/{walletId}/{module}", getWalletBalance).Methods(
		"GET")
	router.HandleFunc("/api/v1/wallet/getAll", getAllWallet).Methods("GET")
	router.HandleFunc("/api/v1/wallet/makePayment/", makePayment).Methods(
		"POST")
	router.HandleFunc("/api/v1/Questions/GetQuestions", getQuestions).Methods(
		"GET")
	router.HandleFunc("/api/v1/Answers/GetAnswers/{QuestionId}", getAnswers).Methods(
		"GET")

	fmt.Println("Listening at port 9233")
	log.Fatal(http.ListenAndServe(":9233", router))

}
