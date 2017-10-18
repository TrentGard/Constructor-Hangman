var letterConstructor = function (letter) {

	this.letter = letter;
	this.show = false;
	this.renderLetter = function () {
		return this.show ? this.letter : "_";
	};

};

module.exports = letterConstructor;