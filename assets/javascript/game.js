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

//Browser Testing
console.log(letters);
console.log(randomLetter)