const mongoose = require('mongoose')

const bangerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  releaseDate: { type: String, required: true },
  genre: { type: String, required: true },
  album: { type: String, required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('Banger', bangerSchema)
