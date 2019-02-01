require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./config/routes.js')
const app = express()


mongoose.connect('mongodb://localhost/wdi-mdb')

app.use(bodyParser.json())

app.use(router)

app.listen(4000, () => console.log('Express is running on port 4000'))
