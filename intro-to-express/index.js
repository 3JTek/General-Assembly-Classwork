const express = require('express')
const server = express()
const bodyParser = require('body-parser')

server.use((req, res, next) => {
  console.log(('I am a middleware'))
  console.log(req.methid, req.url)
  next()
})

server.use((req, res, next) => {
  console.log('I am also a middleware')
  next()
})

//Body parser makees
server.use(bodyParser.json())

server.post('/cheeses', (req, res) => {
  console.log(req.body)
  res.status(201).json({message: 'data recevied?'})
})

server.get('/', (req, res) => {
  res.json({name: 'Jeremy'})
})


server.get('/cheeses/:id', (req, res) => {
  console.log(req.params.id)
  res.end('OK')
})

server.all('/*', (req, res) => {
  res.status(404).json({messgae: 'Page not found'})
})

server.listen(4000, () => {
  console.log('Express is listening on port 4000')
})
