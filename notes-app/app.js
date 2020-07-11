const fs = require('fs')


// fs.writeFileSync("notes.txt", "My name is Hisham Bokhari!")

fs.appendFileSync("notes.txt", " This message was added!") // adds to previous message

