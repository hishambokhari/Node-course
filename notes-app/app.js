const chalk = require('chalk');
const yargs = require('yargs')
const getNotes = require('./notes')

// Customize yargs version
yargs.version('1.1.0')


//create add command
yargs.command({
  command: 'add',  
  describe: 'Add a new note',
  handler: function() {
    console.log('Adding a new note')
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function(){
    console.log('removing the note')
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'Listing down all the notes',
  handler: function(){
    console.log('Listing the note')
  }
})

// Read command
yargs.command({
  command: 'read',
  describe: 'Reading down all the notes',
  handler: function(){
    console.log('Reading the note')
  }
})

// add, remove, read and list


console.log(yargs.argv)



