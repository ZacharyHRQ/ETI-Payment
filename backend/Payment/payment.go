/*
	Payment service:
		Handle payment request
		Reveal QnA answer to payment request
*/

package main

import (
	"fmt"
	"log"
	"net/http"

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
	answer := vars["walletid"]
	fmt.Fprintf(w, "%s", answer)
}

func main() {
	router := mux.NewRouter()
	router.Use(commonMiddleware) //setting context to "json" n cors error

	// routes
	router.HandleFunc("/", welcome)
	router.HandleFunc("/api/v1/payment/reveal/{walletid}", revealAnswer).Methods(
		"POST")
	fmt.Println("Listening at port 9233")
	log.Fatal(http.ListenAndServe(":9233", router))

}
