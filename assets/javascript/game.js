var wins = 0; //Number of Letters correctly guessed
var losses = 0; //Number of Incorrect guesses
var guessesLeft = 13 //Number of Guesses Remaining: (# of guesses remaining for the user).
var guessesSoFar = []; //Display letters which have been insput by user

//Display the following on the page:
var directionsText = document.getElementById("directions-text");

//Wins: (# of times user guessed the word correctly).
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-so-far");

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

//Choose random character
let randomLetter =  Math.floor(Math.random()* letters.length); 

function findRandomLetter() {
    return randomLetter =  Math.floor(Math.random()* letters.length);  
}

function updateGuessesLeft() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};
//Browser Testing
console.log(letters);
console.log(randomLetter)

//



function updateGuessesLeft() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};


// Display the user and computer guesses, and wins/losses/ties.
guessesSoFar.textContent = "Letters guessed: " + letterGuesses;
guessesLeft.textContent = 13 - losses;