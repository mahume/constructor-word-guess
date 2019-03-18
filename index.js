const Word = require('./word')
const inquirer = require('inquirer')
const chalk = require('chalk')

let remainingGuesses = 10
const wordsComputerScience = ['Algorithm', 'Data Structures', 'Framework', 'Object Oriented Programming']
const wordsForeignLanguages = ['Polish', 'Hungarian', 'Mandarin', 'Icelandic']
const wordsMovies = ['The Green Mile', 'Good Will Hunting', 'Shawshank Redemption', 'V for Vendetta']

selectTopicPrompt()
function selectTopicPrompt() {
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
                randomizeWord(wordsComputerScience)
                break;
            case 'Foreign Languages':
                randomizeWord(wordsForeignLanguages)
                break;
            case 'Movies':
                randomizeWord(wordsMovies)
                break; 
            default:
                break;
        }
    })
}
function randomizeWord(arr) {
    let randomNum = Math.floor(Math.random() * arr.length)
    let randomWord = arr[randomNum]
    let newWord = new Word(randomWord)
    newWord.displayWord()
    guessWord(newWord)
}
function guessWord(newWord) {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'guess',
            message: 'Guess a letter!'
        }
    ]).then(answers => {
        console.log(newWord)
        
        /*
        if () {
            newWord.displayWord()
            console.log(`Correct! Keep guessing.`)
        } else {
            newWord.displayWord()
            console.log(`Sorry! Wrong letter. Keep guessing.`)
            remainingGuesses--
            console.log(`Guesses Remaining: ${remainingGuesses}`)
        }
        */
    })
}