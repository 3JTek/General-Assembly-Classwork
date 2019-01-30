const mongoose = require('mongoose')

const filmSchema = new mongoose.Schema({
  title: { type: String, required: true },
  runningTime: { type: Number },
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true },
  image: { type: String, required: true },
  classification: { type: String }
})

module.exports = mongoose.model('Film', filmSchema)
