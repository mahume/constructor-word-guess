const Letter = function(character) {
    this.character = character
    this.hasBeenGuessed = false
    this.guessCheck = function(guessedLetter) {
        if (guessedLetter === this.character) {
            this.hasBeenGuessed = true
        }
        this.characterReturn()
    }
    this.characterReturn = function() {
        if (this.hasBeenGuessed) {
            console.log(this.character)
        } else {
            console.log('_')
        }
    }
}

module.exports = Letter