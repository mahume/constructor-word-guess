const Letter = function(character) {
    this.character = character
    this.hasBeenGuessed = false
    this.characterReturn = function() {
        if (this.hasBeenGuessed) {
            console.log(this.character)
        } else {
            console.log('_')
        }
    }
    this.characterCheck = function(guessedLetter) {
        if (this.guessedLetter === this.character) {
            this.hasBeenGuessed = true
        }
    }
}
module.exports = Letter