const word = require('./word')

const inquirer = require('inquirer')
const chalk = require('chalk')

const wordsComputerScience = ['Algorithm', 'Data Structures', 'Framework', 'Object Oriented Programming']
const wordsForeignLanguages = ['Polish', 'Hungarian', 'Mandarin', 'Icelandic']
const wordsMovies = ['The Green Mile', 'Good Will Hunting', 'Shawshank Redemption', 'V for Vendetta']

/*
function randomizeWord(arr) {
    let randomNum = Math.floor(Math.random() * arr.length) + 1
    let randomWord = words[randomNum]
    let newWord = new Word
}
*/

inquirer
.prompt([
    {
        type: 'list',
        name: 'topic',
        message: 'Pick a hangman topic.',
        choices: ['Computer Science', 'Foreign Languages', 'Movies']
    }
]).then(function(answers) {

})