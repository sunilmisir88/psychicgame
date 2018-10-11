
		
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var numGuesses = 3;
var guessChoices = [];


document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    



   if (options.indexOf(userGuess) > -1) {

       if (userGuess === computerGuess) {
           wins++;
           numGuesses = 3;
           guessChoices = [];
       }

       if (userGuess != computerGuess) {
           numGuesses --;
           guessChoices.push(userGuess);
       }

       if (numGuesses === 0) {

       numGuesses = 3;
       losses ++;
       guessChoices = [];

       
   }


   var html = 
   "<h1> The Psychic Game </h1>" +
   "<p>You have 3 chances to figure out which letter am I thinking of?</p>" +
   "<p>The letter changes after every guess!</p>" +
   "<p>Wins: " + wins + "</p>" +
   "<p>Losses: " + losses + "</p>" +
   "<p>Guesses Left: " + numGuesses + "</p>" +
   "<p>Your Guesses so far (play the probablities): " + guessChoices.join(", ") + "</p>";

   document.querySelector("#game").innerHTML = html;

   
   }
};

