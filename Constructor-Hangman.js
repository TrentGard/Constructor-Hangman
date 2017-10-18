var WordConstructor = require('./word');

var prompt = require('prompt');

console.log("Welcome to Hangman!");
console.log("Guess a letter of the name of an NFL team!");
console.log("Good luck!");
console.log("-----------------------");
prompt.start();

game = {
	wordBank: ['Eagles', 'Cowboyssuck', 'Colts', 'Ravens', 'Redskins', 'Jaguars', 'Texans'],
	wordsWon: 0,
	guessesRemaining: 10,
	currentWord: null,

	startGame: function(word) {
		this.resetGuesses();
		this.currentWord = new WordConstructor (this.wordBank[Math.floor(Math.random()*this.wordBank.length)]);
		this.currentWord.getLetters();
		this.promptUser();
	},

	resetGuesses: function() {
			this.guessesRemaining = 10;
	},

	promptUser: function(){
		var self = this;
		prompt.get(['guessLetter'], function(error, result){
			console.log("You guessed: "+result.guessLetter);
			var manyGuessed = self.currentWord.checkLetter(result.guessLetter);

			if (manyGuessed === 0){
				console.log("Wrong!");
				self.guessesRemaining--;
			} else {
				console.log("Correct!");
					if (self.currentWord.findWord()){
						console.log("You won!");
						return;
					}
			}

			console.log("Guess remaining: " + self.guessesRemaining);
			console.log("----------------");

			if ((self.guessesRemaining > 0) && (self.currentWord.found = false)) {
				self.promptUser();
			} else if (self.guessesRemaining == 0) {
				console.log("Game Over. Correct word was " + self.currentWord.word);
			} else {
				console.log(self.currentWord.renderWord());
			}

		});
	}

};

game.startGame();