const Letter = require('./letter')

const func = new Letter

const Word = function(wordToGuess) {
    this.wordToGuess = wordToGuess
    this.displayWord = function() {
        // call function on each letter object
        // func.characterReturn
        // concatenate together
        // return string representation of word
    }
    this.wordCheck = function(character) {
        // characterCheck
        for (let i = 0; i < wordToGuess.length; i++) {
            func.characterCheck(wordToGuess[i])
            func.characterReturn();
        }
    }
}

const word = new Word('Mike')
word.wordCheck();

