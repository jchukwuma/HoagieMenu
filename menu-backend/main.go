package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

func getCafeteriaContents() (string, error) {
	// Read cafeteria information from file
	// Let us pretend this is from Princeton API
	jsonFile, err := os.Open("res_colleges.json")

	// if we os.Open returns an error then handle it
	if err != nil {
		fmt.Println(err)
		return "", fmt.Errorf("error fetching cafeteria info")
	}
	fmt.Println("Successfully retrieved cafeteria information from the API.")
	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()

	fileContents, err := ioutil.ReadAll(jsonFile)
	if err != nil {
		fmt.Println(err)
		return "", fmt.Errorf("error reading cafeteria info")
	}
	return string(fileContents), nil
}

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "Hello, welcome to Hoagie API!")
}

func StatusHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, `
		{
			"status": "OK",
			"message": "Hello from Hoagie!"
		}
	`)
}

func MenusHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	// TODO: Return the list of all the colleges and their menus
	// Hint: check out the getCafeteriaContents function
	fmt.Fprint(w, "Change this to cafeteria menus")
}

func MenuHandler(w http.ResponseWriter, r *http.Request) {
	// TODO:
	// Check out https://tutorialedge.net/golang/parsing-json-with-golang/
	// as well as what you get when you currently visit localhost:8080/menu/whitman
	// and add the ability to get the menu of a specific cafeteria by going to
	// localhost:8080/menu/{cafeteria}
	vars := mux.Vars(r)
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "Res. College Name: %v\n", vars["college"])
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", HomeHandler)
	r.HandleFunc("/status", StatusHandler)
	r.HandleFunc("/menus", MenusHandler)
	r.HandleFunc("/menu/{college}", MenuHandler)
	http.Handle("/", r)

	srv := &http.Server{
		Handler: r,
		Addr:    "127.0.0.1:8000",
	}

	log.Fatal(srv.ListenAndServe())
}
