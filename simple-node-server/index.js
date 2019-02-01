const http = require('http')

const server  = http.createServer()

server.on('request', (req, res) => {
  console.log(req.method, req.url)

  res.setHeader('Content-type', 'application/JSON')
  res.statusCode = 418
  res.write('OK')
  res.end()
})

server.listen(4000, () => console.log('Up and running'))
