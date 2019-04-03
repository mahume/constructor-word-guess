const inquirer = require('inquirer');
const chalk = require('chalk');
const Word = require('./word');

// let newWord
let remainingGuesses = 9;
let wordToGuess;
const lettersGuessed = [];

function selectTopicPrompt() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'topic',
        message: `Welcome to Word Guess! Select a topic to get started.
            `,
        choices: ['Computer Science', 'Foreign Languages', 'Movies'],
      },
    ])
    .then(answers => {
      const { topic } = answers;
      chooseTopicArray(topic);
    });
}
selectTopicPrompt();
function chooseTopicArray(topic) {
  const WORDS_COMPUTER_SCIENCE = [
    'Algorithm',
    'Data Structures',
    'Framework',
    'Boolean',
    'Closure',
    'Array',
    'Iteration',
  ];
  const WORDS_FOREIGN_LANGUAGES = [
    'Polish',
    'Hungarian',
    'Mandarin',
    'Icelandic',
    'Hebrew',
    'Arabic',
  ];
  const WORDS_MOVIES = [
    'The Green Mile',
    'Good Will Hunting',
    'Shawshank Redemption',
    'V for Vendetta',
    'Casablanca',
    'The Godfather',
  ];

  switch (topic) {
    case 'Computer Science':
      pickRandomWord(WORDS_COMPUTER_SCIENCE);
      break;
    case 'Foreign Languages':
      pickRandomWord(WORDS_FOREIGN_LANGUAGES);
      break;
    case 'Movies':
      pickRandomWord(WORDS_MOVIES);
      break;
    default:
      break;
  }
}
function pickRandomWord(arr) {
  const randomNum = Math.floor(Math.random() * arr.length);
  const randomWord = arr[randomNum];
  const newWord = new Word(randomWord);
  wordToGuess = newWord.wordToArr.map(letter => letter.toLowerCase());
  removeSpaces();
  guessSetup(newWord);
}
function removeSpaces() {
  for (let i = 0; i < wordToGuess.length; i++) {
    if (wordToGuess[i] === ' ') {
      wordToGuess.splice([i], 1);
    }
  }
}
function guessSetup(newWord) {
  console.log('');
  newWord.displayWord();
  if (checkIfWon() || checkIfLost()) {
    playAgainPrompt();
    return;
  }

  guessLetterPrompt(newWord);
}
function guessLetterPrompt(newWord) {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'guess',
        message: 'Guess a letter!',
      },
    ])
    .then(answers => {
      const guess = answers.guess.toLowerCase();
      alreadyGuessed(guess, newWord);
      newWord.checkLetter(guess);
      afterGuess(guess, newWord);
    });
}
function alreadyGuessed(letter, newWord) {
  if (lettersGuessed.includes(letter)) {
    console.log(`You've already guessed that. Try another letter`);
    guessLetterPrompt(newWord);
  }
}
function afterGuess(letter, newWord) {
  if (wordToGuess.includes(letter)) {
    wordToGuess = wordToGuess.filter(el => el !== letter);
    console.log(chalk.underline(`Correct!`));
    console.log('');
    guessSetup(newWord);
  } else {
    console.log(chalk.underline(`Sorry! Wrong letter. Keep guessing.`));
    console.log(
      chalk.italic(`Guesses Remaining: ${chalk.red(remainingGuesses)}`)
    );
    console.log('');
    remainingGuesses--;
    guessSetup(newWord);
  }
}
function checkIfWon() {
  if (wordToGuess.length === 0) {
    console.log('Congrats!');
    return true;
  }
}
function checkIfLost() {
  if (remainingGuesses < 0) {
    console.log(`Sorry, Game over`);
    return true;
  }
}
function playAgainPrompt() {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'playAgain',
        message: 'Would you like to continue playing?',
      },
    ])
    .then(answers => {
      if (answers.playAgain) {
        remainingGuesses = 9;
        selectTopicPrompt();
      } else {
        console.log('Goodbye for now!');
        process.exit();
      }
    });
}
