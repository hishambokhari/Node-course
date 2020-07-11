const fs = require('fs')
// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book) //bookJson is a string not an object, converting to a string via JSONStringify
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)



const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)


user.name = 'Hisham'
user.age = 28

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)