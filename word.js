const Letter = require('./letter')

const Word = function(word) {
    this.wordToArr = word.split('')
    this.newLetterArr = []
    for (let i = 0; i < this.wordToArr.length; i++) {
        const newChar = new Letter(this.wordToArr[i])
        this.newLetterArr.push(newChar)
    }
    this.checkLetter = function(guess) {
        for (let i = 0; i < this.newLetterArr.length; i++) {
            this.newLetterArr[i].checkGuess(guess)
        }
    }
    this.displayWord = function() {
        let arrToStr = []
        for (let i = 0; i < this.newLetterArr.length; i++) {
            arrToStr.push(this.newLetterArr[i].returnCharacter())
        }
        console.log(arrToStr.join(' '))
    }
}

module.exports = Word