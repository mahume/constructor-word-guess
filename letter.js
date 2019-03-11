
function Letter(guess) {
    this.character = 'b'
    this.guess = guess
    this.hasBeenGuessed = false
    this.characterCheck = function() {
        if (this.character === this.guess) {
            this.hasBeenGuessed = true
        }
        this.characterReturn()
    }
    this.characterReturn = function() {
        if (this.hasBeenGuessed) {
            return this.character
        } else {
            return '_'
        }
    }
}
const a = new Letter('a');
const b = new Letter('b');
a.characterCheck()
b.characterCheck()
