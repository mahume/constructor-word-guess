const Letter = function(letter) {
    this.letter = letter
    this.hasBeenGuessed = false
    this.checkGuess = function(guess) { 
        if (guess === this.letter) {
            this.hasBeenGuessed = true
        }
    }
    this.returnCharacter = function() {
        if (this.hasBeenGuessed) {
            return this.letter
        } else {
            return '_'
        }
    }
}

module.exports = Letter