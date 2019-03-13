const Letter = require('./letter')

const func = new Letter()

const Word = function(word) {
    this.wordSplitToArr = []
    this.wordCheck = function(word) {
        for (let i = 0; i < word.length; i++) {
            let character = func.characterCheck(word[i])
            this.wordSplitToArr.push(character)
        }
    }
    this.displayWord = function() {
        // call function on each letter object
        // func.characterReturn
        // concatenate together
        // return string representation of word
        console.log(this.wordSplitToArr)
    }
}

const newWord = new Word('Mike')
newWord.displayWord()
