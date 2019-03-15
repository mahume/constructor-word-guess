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
            console.log(this.newLetterArr[i].checkGuess(guess))
        }
    }
    this.displayWord = function() {
        // call function on each letter object
        let str = ''
        for (let i = 0; i < this.newLetterArr.length; i++) {
            str += this.newLetterArr[i].returnCharacter()
        }
        console.log(str)
        // func.characterReturn
        // concatenate together
        // return string representation of word
    }
}

const newWord = new Word('Mike')
newWord.checkLetter('i')
newWord.displayWord()