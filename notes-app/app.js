const getNotes = require('./notes')
const chalk = require('chalk');

const msg = getNotes()
console.log(msg)

const greenMsg = chalk.green.bold('Success!')
console.log(greenMsg);
