var inquirer = require('inquirer');

var word = require('./word.js');

var ansSpaces = [];

var restLetter;

var guesses;

var emptyWord;

// calling prompt
letsPlay();

// asking user whether he/she wants to play?
function letsPlay() {
	inquirer.prompt({
		name: 'play',
		type: 'input',
		message: 'Do you want to play? (Y/N)'
	}).then(function (answers){
		var userInput = answers.play.toUpperCase();
		if (userInput === "Y"){
			newGame();
		} else {
			return;
		}
	});
};

// the new game will proceed based on user answers
function newGame() {
	guesses = 10;
	ansSpaces = [];
	var guessWord = new word(); 
	emptyWord = guessWord.Electronics(); 

	for (var i = 0; i < emptyWord.length; i++) {
			ansSpaces[i] = "_";
		}
		console.log(ansSpaces);
		restLetter = emptyWord.length;

	// function for user guesses
	playGame();
};

// analysing user guess on each steps..
function playGame(answers) {
	var newWord = emptyWord;
	inquirer.prompt({
		name: 'guess',
		type: 'input',
		message: 'Guess letter:'

	}).then(function (answers){
		guesses--;
		var userGuess = answers.guess;
		for (var j = 0; j < newWord.length; j++) {
			if (userGuess === newWord[j]) {
				ansSpaces[j] = userGuess;
				restLetter--; 
			}
		}
		console.log(ansSpaces);
		console.log("Number of guesses to go: " + guesses);
		// run check function t see user guess result
		check();
	});
};

// check to see if user won, lost, or needs to guess again
function check() {
	var newWord = emptyWord; 

	if (restLetter === 0) {
		console.log("Awesome !! You Win!");
		letsPlay(); 

	} else if (guesses === 0) {
		console.log("You Lose!,Keep Trying.  Correct Answer: " + newWord);
		letsPlay(); 

	} else {
		playGame(); 
	}
};
// //==============================================================================
