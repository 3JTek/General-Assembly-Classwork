require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

const routes = require('./config/routes')

mongoose.connect(process.env.MONGODB_URI)

app.use(express.static(`${__dirname}/public`))

app.use(bodyParser.json())
app.use('/api', routes)
app.use('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`))

app.listen(process.env.PORT, () => console.log(`Up and running on port ${process.env.PORT}`))
