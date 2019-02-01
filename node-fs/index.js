const fs = require('fs')

console.log(__dirname)

fs.readdir(__dirname, (err, files) => {
  console.log(files)
})

fs.writeFile('hello.txt', 'Hello World!', (err) => {
  if(err) return console.log(err)
  console.log('File successfuly created')
})

fs.readFile('Hello.txt', 'utf-8', (err, data) => {
  if(err) return console.log(err)
  console.log(data)
})
