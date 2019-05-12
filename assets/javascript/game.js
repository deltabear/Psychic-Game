//Variables to hold numbers
var options = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var wins= 0;
var losses= 0;
var turns= 13;
var guess="";


var computerGuess;
var intialized=true;
document.onkeyup = function(event) {
debugger
if(intialized){
computerGuess = options[Math.floor(Math.random()*options.length)];
intialized=false;
}


var userguess = event.key;
if (userguess == computerGuess) {
computerGuess = options[Math.floor(Math.random()*options.length)];
  intialized=true;
  wins++;
  turns = 13; 
  guess = ""; 
}

else if(userguess !== computerGuess) {
 turns--;
 guess += userguess + ", ";}

  if (turns ==0) {
    losses++;
    turns= 13;
    guess="";



}

var html = "<p>Guess what letter I'm thinking of</p>" + 
  "<p>wins: " + wins + "</p>" +
  "<p>losses: " + losses + "</p>" +
  "<p>guesses left: " + turns + "</p>"+
  "<p>Your Guess So Far: " + guess + "</p>";

document.querySelector('#game').innerHTML = html;
};