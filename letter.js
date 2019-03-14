const Letter = function(letter) {
    this.letter = letter
    this.hasBeenGuessed = false
    this.checkGuess = function(guessedLetter) { 
        if (guessedLetter === this.letter) {
            this.hasBeenGuessed = true;
            console.log({letter: this.letter, guessed: this.hasBeenGuessed});
        } else {
            console.log({letter: this.letter, guessed: this.hasBeenGuessed});
        }

    }
    this.returnCharacter = function() {
        if (this.hasBeenGuessed) {
            console.log(this.letter)
        } else {
            console.log('_')
        }
    }
}
module.exports = Letter