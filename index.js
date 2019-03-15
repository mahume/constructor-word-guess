const Word = require('./word')
const inquirer = require('inquirer')
const chalk = require('chalk')


let remainingGuesses = 10
const wordsComputerScience = ['Algorithm', 'Data Structures', 'Framework', 'Object Oriented Programming']
const wordsForeignLanguages = ['Polish', 'Hungarian', 'Mandarin', 'Icelandic']
const wordsMovies = ['The Green Mile', 'Good Will Hunting', 'Shawshank Redemption', 'V for Vendetta']

inquirer
.prompt([
    {
        type: 'list',
        name: 'topic',
        message: `Welcome to Word Guess! Select a topic to get started.`,
        choices: ['Computer Science', 'Foreign Languages', 'Movies']
    }
]).then(function(answers) {
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

function randomizeWord(arr) {
    let randomNum = Math.floor(Math.random() * arr.length)
    let randomWord = arr[randomNum]
    let newWord = new Word(randomWord)
    newWord.displayWord()
}