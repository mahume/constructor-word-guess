const Word = require('./word')
const inquirer = require('inquirer')
const chalk = require('chalk')

let remainingGuesses = 10

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
    let randomNum = Math.floor(Math.random() * arr.length)
    let randomWord = arr[randomNum]
    let newWord = new Word(randomWord)
    guessLetterPrompt(newWord)
}
function guessLetterPrompt(newWord) {
    const wordToGuess = newWord.wordToArr
    newWord.displayWord()

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'guess',
            message: 'Guess a letter!'
        }
    ]).then(answers => {
        newWord.checkLetter(answers.guess)
        console.log(wordToGuess)

        if (wordToGuess.includes(answers.guess)) {
            for (let i = 0; i < wordToGuess.length; i++) {
                if (answers.guess === wordToGuess[i].toLowerCase()) {
                    wordToGuess.splice([i], 1);
                }
            }
            console.log(`Correct! Keep guessing.`)
            guessLetterPrompt(newWord)
        } else {
            console.log(`Sorry! Wrong letter. Keep guessing.`)
            remainingGuesses--
            console.log(`Guesses Remaining: ${remainingGuesses}`)
            guessLetterPrompt(newWord)
        }
        if (remainingGuesses <= 0) {
            console.log(`Sorry, Game over`)
            playAgain()
        }
    })
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
            selectTopicPrompt()
        } else {
            console.log('Goodbye')
            process.exit()
        }
    })
}