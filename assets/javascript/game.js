//Variables to hold numbers
var wins = 0; //Number of Letters correctly guessed
var losses = 0; //Number of Incorrect guesses
var guessesLeft = 13 //Number of Guesses Remaining: (# of guesses remaining for the user).
var guessesSoFar = []; //Display letters which have been insput by user

//Display the following on the page:
var directionsText = document.getElementById("directions-text");

//Wins: (# of times user guessed the word correctly).
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-so-far");

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

//Choose random character
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    let computerGuess = computerChoices[Math.floor(Math.random()* letters.length)]; 

    if ((userGuess === computerChoice)) {
     wins++;
    } else {
     losses++; guessesLetters + userGuess
    }

    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    tiesText.textContent = "ties: " + ties;

    function updateGuessesLeft() {
        // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
        document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
    }

    function updateGuessesSoFar() {
        // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
    }
};

//Browser Testing
console.log(letters);
console.log(computerGuess)

// Display the user and computer guesses, and wins/losses/ties.
guessesSoFar.textContent = "Letters guessed: " + letterGuesses;
guessesLeft.textContent = 13 - losses;