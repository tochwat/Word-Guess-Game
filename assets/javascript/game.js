
// Variables to hold references to HTML where we want to display content
var startText = document.getElementById("start-text");
var wonText = document.getElementById("won-text");
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word-text");
var remainingGuessesText = document.getElementById("remaining-guesses-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");
var image = document.getElementById("image");


//Create an array of the possible words for the game to use 
var words = [
    "rainier",
    "adams",
//    "baker",
//    "tahoma",
//    "kulshan",
//    "helens",
//    "bonanza"
];


//Pick a random word from the words array
var word = words[Math.floor(Math.random() * words.length)];

//Create playerProgress array to keep track of player's progress
var playerProgress = [];
//For loop - for length of word, set playerProgress[i] as "_" 
for (var i=0; i<word.length; i++){
    playerProgress[i] = "_";
}



//Create variable to track remaining guesses
var guessesRemaining = 15;
//Create variable integer to keep track of the length of the randomWord to count down as the player guesses correct letters - when it reaches 0 the player has won
var remainingLetters = word.length;
//Create variable to keep track of wins
var wins = 0;
//Create lettersGuessed array to keep track of player guesses
var lettersGuessed = [];


//Create wins display
winsText.textContent = wins;
//Create player's progress display
currentWordText.textContent = playerProgress.join(" ");
//Create the remaining guesses display
remainingGuessesText.textContent = guessesRemaining;
//Create the lettersGuessed display
lettersGuessedText.textContent = lettersGuessed;



document.onkeyup = function(event) {
    var letter = event.key;

    //NEED TO ADD CODE: If input equals a letter already guessed, set letter to null
    if (lettersGuessed.includes(letter)) {
        letter=null;
    } else {
        //Add letter to array of guessed letters
        lettersGuessed.push(letter);
    }
    


    for (var j=0; j<word.length; j++) {
        if (word[j]===letter) {
            playerProgress[j]=letter;
            remainingLetters--;
        }
    }
    //Subtract one from guessesRemaining
    guessesRemaining--;



    //if remainingLetters is zero, pick a new word and add 1 to numWins, pick a new word and start over - but first use if statement to determine completed word and show new image, etc.
    if (remainingLetters===0){
        //Update won-text
        wonText.textContent = word;
        
        if (word==="adams"){
            image.setAttribute("src", "assets/images/placeholder1.jpeg");
        }else if (word==="rainier"){
            image.setAttribute("src", "assets/images/placeholder2.jpeg");
        }


        //Pick new word from the words array
        word = words[Math.floor(Math.random() * words.length)];

        //Empty playerProgress array
        playerProgress = [];
        //For loop - for length of word, set playerProgress[i] as "_" 
        for (var i=0; i<word.length; i++){
            playerProgress[i] = "_";
        }
        //Reset number of guesses
        guessesRemaining = 15;
        //reset remainingLetters variable for new word
        remainingLetters = word.length;
        //add 1 to wins
        wins++;
        //empty lettersGuessed array
        lettersGuessed = [];
    }


    //if guessesRemaining is zero, pick a new word and start over
    if (guessesRemaining===0){
        //Pick new word from the words array
        word = words[Math.floor(Math.random() * words.length)];

        //Empty playerProgress array
        playerProgress = [];
        //For loop - for length of word, set playerProgress[i] as "_" 
        for (var i=0; i<word.length; i++){
            playerProgress[i] = "_";
        }
        //Reset number of guesses
        guessesRemaining = 15;
        //reset remainingLetters variable for new word
        remainingLetters = word.length;
        //empty lettersGuessed array
        lettersGuessed = [];
    }

    //Update wins display
    winsText.textContent = wins;
    //Update the player's progress display
    currentWordText.textContent = playerProgress.join(" ");
    //Update the remaining guesses display
    remainingGuessesText.textContent = guessesRemaining;
    //Update lettersGuessed array
    lettersGuessedText.textContent = lettersGuessed.join(", ");
}




