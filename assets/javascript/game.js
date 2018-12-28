
// Variables to hold references to HTML where we want to display content
var startText = document.getElementById("start-text");
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word-text");
var remainingGuessesText = document.getElementById("remaining-guesses-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");



//Create an array of the possible words for the game to use 
var words = [
    "banana",
    "apple",
//    "grapefruit",
//    "grapes",
//    "eggplant",
//    "cabbage",
//    "orange"
];


//Pick a random word from the words array
var word = words[Math.floor(Math.random() * words.length)];

//Create playerProgress array to keep track of player's progress
var playerProgress = [];
//For loop - for length of word, set playerProgress[i] as "_" 
for (var i=0; i<word.length; i++){
    playerProgress[i] = "_";
}

//Create player's progress display
currentWordText.textContent = playerProgress.join(" ");

//Create variable integer to keep track of the length of the randomWord to count down as the player guesses correct letters - when it reaches 0 the player has won
var remainingLetters = word.length;


document.onkeyup = function(event) {
    var letter = event.key;
    for (var j=0; j<word.length; j++) {
        if (word[j]===letter) {
            playerProgress[j]=letter;
            remainingLetters--;
        }
    }


//Update the player's progress display
currentWordText.textContent = playerProgress.join(" ");
}





/* This all needs to be deleted - replaced the while loop with the event listener
//While the player hasn't finished guessing the word (remainingLetters is greater than 0)
while (remainingLetters > 0) {
    //Display the player's progress
    currentWordText.textContent = playerProgress.join(" ");

    //take the player's input
    //if they correctly guess a letter, update the progress display and subtract 1 from the remainingLetters variable
    
    document.onkeyup = function(event) {
        var letter = event.key;
        for (var j=0; j<word.length; j++) {
            if (word[j]===letter) {
                playerProgress[j]=letter;
                remainingLetters--;
            }
        }
    }
}
*/

//Congratulate player on winning 
//alert(playerProgress.join(" "));
//alert("Congrats! The word was " + word + "!");
