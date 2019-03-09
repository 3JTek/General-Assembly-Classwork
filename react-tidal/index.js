require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
mongoose.plugin(require('mongoose-unique-validator'))
const bodyParser = require('body-parser')
const routes = require('./config/routes')
const errorHandler = require('./lib/errorHandler')
const app = express()


mongoose.connect(process.env.MONGODB_URI)

app.use(express.static(`${__dirname}/public`))

app.use(bodyParser.json())
app.use('/api', routes)
app.use('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`))

app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`Up and running on port ${process.env.PORT}`))
