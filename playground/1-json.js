const fs = require('fs')
const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book) //bookJson is a string not an object, converting to a string via JSONStringify
console.log(bookJSON)

const parsedData = JSON.parse(bookJSON) // turns string back to object
console.log(parsedData.author)
