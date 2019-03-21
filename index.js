const Word = require('./word')
const inquirer = require('inquirer')
const chalk = require('chalk')

let remainingGuesses = 10
let wordToGuess, newWord
let lettersGuessed = []

selectTopicPrompt()
function selectTopicPrompt() {
    const wordsComputerScience = ['Algorithm', 'Data Structures', 'Framework', 'Object Oriented Programming']
    const wordsForeignLanguages = ['Polish', 'Hungarian', 'Mandarin', 'Icelandic']
    const wordsMovies = ['The Green Mile', 'Good Will Hunting', 'Shawshank Redemption', 'V for Vendetta']    
    
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'topic',
            message: `Welcome to Word Guess! Select a topic to get started.
            `,
            choices: ['Computer Science', 'Foreign Languages', 'Movies']
        }
    ]).then(answers => {
        switch (answers.topic) {
            case 'Computer Science':
                pickRandomWord(wordsComputerScience)
                break;
            case 'Foreign Languages':
                pickRandomWord(wordsForeignLanguages)
                break;
            case 'Movies':
                pickRandomWord(wordsMovies)
                break; 
            default:
                break;
        }
    })
}

function pickRandomWord(arr) {
    const randomNum = Math.floor(Math.random() * arr.length)
    const randomWord = arr[randomNum]
    newWord = new Word(randomWord)
    wordToGuess = newWord.wordToArr.map(letter => letter.toLowerCase())
    guessLetterPrompt(newWord)
}

function guessLetterPrompt(newWord) {
    console.log('')
    newWord.displayWord()
    console.log(wordToGuess)

    checkIfWon()
    removeSpaces()

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'guess',
            message: 'Guess a letter!'
        }
    ]).then(answers => {
        alreadyGuessed(answers.guess)
        newWord.checkLetter(answers.guess)

        if (wordToGuess.includes(answers.guess)) {
            for (let i = 0; i < wordToGuess.length; i++) {
                if (answers.guess === wordToGuess[i]) {
                    wordToGuess.splice([i], 1);
                }
            }
            lettersGuessed.push(answers.guess)
            console.log(lettersGuessed)
            console.log(`Correct! Keep guessing.`)
            console.log('')
            guessLetterPrompt(newWord)
        } else {
            console.log(`Sorry! Wrong letter. Keep guessing.`)
            console.log(chalk.italic(`Guesses Remaining: ${chalk.red(remainingGuesses)}`))
            console.log('')
            remainingGuesses--
            guessLetterPrompt(newWord)
        }

        checkIfLost()
    })
}
function removeSpaces() {
    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === ' ') {
            wordToGuess.splice([i], 1)
        }
    }
}
function alreadyGuessed(letter) {
    if (lettersGuessed.includes(letter)) {
        console.log(`You've already guessed that. Try another letter`)
        guessLetterPrompt(newWord)
    }
}
function checkIfWon() {
    if (wordToGuess.length === 0) {
        console.log('Congrats!')
        playAgain()
    }
}
function checkIfLost() {
    if (remainingGuesses <= 0) {
        console.log(`Sorry, Game over`)
        playAgain()
    }
}
function playAgain() {
    inquirer
    .prompt([
        {
            type: 'confirm',
            name: 'playAgain',
            message: 'Would you like to continue playing?'
        }
    ]).then(answers => {
        if (answers.playAgain) {
            remainingGuesses = 10
            selectTopicPrompt()
        } else {
            console.log('Goodbye')
            process.exit()
        }
    })
}