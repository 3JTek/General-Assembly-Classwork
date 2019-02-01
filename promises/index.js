const fs = require('fs')
const Promise = require('bluebird')

Promise.promisifyAll(fs)

// function writeFileAsPromised(filename, content) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(filename, content, (err) => {
//       if(err) reject(err)
//       resolve('PARTY TIME!')
//     })
//   })
// }

fs.writeFileAsync('hello.txt', 'Hello World!')
  .then(() => fs.readFileAsync('hello.txt', 'utf-8'))
  .then(data => console.log(data))
  .catch(err => console.log(err))

fs.writeFile('hello.txt', 'Hello World!', (err) => {
  if(err) return console.log(err)
  fs.readFile('hello.txt', 'utf-8', (err, data) => {
    if(err) return console.log(err)
    console.log(data)
  })
})



// fs.writeFile('hello.txt', 'Hello World!', (err) => {
//   if(err) return console.log(err)
//   else console.log('File created!')
// })
