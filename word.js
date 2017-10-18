var letterConstructor = require("./letter");

 function WordConstructor(word) {
	this.word = word;
	this.letters = [];
	this.found = false;
	this.getLetters = function () {
		for (var i = 0; i < this.word.length; i++) {
			this.letters.push(new letterConstructor(this.word[i]))
		}
	};

	this.findWord = function () {
		this.found = this.letters.every(function(currentLetter) {
			return currentLetter.show;
		});
	};

	this.checkLetter = function (userGuess) {

		var toReturn = 0;

		for (var i = this.letters.length - 1; i >= 0; i--) {
			this.letters[i]
			if (this.letters[i].letter = userGuess) {
				this.letters[i].show = true;
				toReturn++;
			}
		}

		return toReturn;

	};

	this.renderWord = function() {
		var string = "";
		for (var i = 0; i < this.letters.length; i++) {
			string += this.letters[i].renderLetter();
		}
		return string;
	};

}

module.exports = WordConstructor;