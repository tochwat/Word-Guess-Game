
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

//Create variable integer to keep track of the length of the randomWord to count down as the player guesses correct letters - when it reaches 0 the player has won
var remainingLetters = word.length;


//While the player hasn't finished guessing the word (remainingLetters is greater than 0)
while (remainingLetters > 0) {
    //Display the player's progress
    alert(playerProgress.join(" "));

    //take the player's input
    //Check if the player's guess is valid letter input - if not, tell them to input a single letter
    //If the player wants to quit - quit the game
    //if they correctly guess a letter, update the progress display and subtract 1 from the remainingLetters variable
    var letter = prompt("Enter a letter. Click cancel to quit.");
    if (letter === null) {
        break;
    } else if (letter.length !== 1) {
        alert ("Please enter 1 letter.");
    } else {
        for (var j=0; j<word.length; j++) {
            if (word[j]===letter) {
                playerProgress[j]=letter;
                remainingLetters--;
            }
        }
    }


}


//Congratulate player on winning 
alert(playerProgress.join(" "));
alert("Congrats! The word was " + word + "!");
