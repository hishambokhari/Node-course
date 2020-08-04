const chalk = require('chalk')
const validator = require('validator');
const getNotes = require('./notes');


console.log(chalk.green('This is a success!'))
const myNotes = getNotes()
console.log(myNotes)

console.log(validator.isURL('https://mead.io')) // url validator