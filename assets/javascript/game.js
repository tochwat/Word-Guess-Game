
// Variables to hold references to HTML where we want to display content
var startText = document.getElementById("start-text");
var wonText = document.getElementById("won-text");
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word-text");
var remainingGuessesText = document.getElementById("remaining-guesses-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");
var image = document.getElementById("image");
var clickAudio = document.getElementById("click-audio"); 
var errorAudio = document.getElementById("error-audio"); 
var winAudio = document.getElementById("win-audio"); 



//Create an array of the possible words for the game to use 
var words = [
    "rainier",
    "adams",
    "baker",
    "bonanza",
    "fernow",
    "glacier",
    "stuart",
    "breland"
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


//function to check the player's guess and then take away 1 from their guessesRemaining
function checkGuess(letter){
    for (var j=0; j<word.length; j++) {
        if (word[j]===letter) {
            playerProgress[j]=letter;
            remainingLetters--;
        }
    }
    //Subtract one from guessesRemaining
    guessesRemaining--;
}

//function to reset word
function resetWord(){
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

//function to check if valid guess
function isValidGuess(guess) {
    return /^[A-Za-z]$/.test(guess);
}

//then do if (isValidGuess(event.key)) {checkGuess(event.key);}




//function on keypress
document.onkeyup = function(event) {
    //take user input, make sure its lower case, and assign to letter variable
    var letter = event.key.toLowerCase();

    //check the letter only if it's a valid letter
    if (isValidGuess(letter)) {

        //If input equals a letter already guessed, set letter to null
        if (lettersGuessed.includes(letter)) {
            //play error audio
            errorAudio.play(); 

            letter=null;
        } else {
            //play click audio
            clickAudio.play(); 
            //Add letter to array of guessed letters
            lettersGuessed.push(letter);
        }
        
        //call checkGuess function to check the player input
        checkGuess(letter);

        //if remainingLetters is zero, pick a new word and add 1 to numWins, pick a new word and start over - but first use if statement to determine completed word and show new image, etc.
        if (remainingLetters===0){
            //play win audio
            winAudio.play(); 
            
            //Update won-text and image based on won word
            if (word==="adams"){
                wonText.textContent = "Mount Adams!";
                image.setAttribute("src", "assets/images/adams.png");
            }else if (word==="rainier"){
                wonText.textContent = "Mount Rainier!";
                image.setAttribute("src", "assets/images/rainier.png");
            }else if (word==="baker"){
                wonText.textContent = "Mount Baker!";
                image.setAttribute("src", "assets/images/baker.png");
            }else if (word==="bonanza"){
                wonText.textContent = "Bonanza Peak!";
                image.setAttribute("src", "assets/images/bonanza.png");
            }else if (word==="fernow"){
                wonText.textContent = "Mount Fernow!";
                image.setAttribute("src", "assets/images/fernow.png");
            }else if (word==="glacier"){
                wonText.textContent = "Glacier Peak!";
                image.setAttribute("src", "assets/images/glacier.png");
            }else{
                wonText.textContent = "Mount Stuart!";
                image.setAttribute("src", "assets/images/stuart.png");
            }

            //add 1 to wins
            wins++;


            //call function to reset word
            resetWord();
        }


        //if guessesRemaining is zero, pick a new word and start over
        if (guessesRemaining===0){
            //call function to reset word
            resetWord();
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
}




