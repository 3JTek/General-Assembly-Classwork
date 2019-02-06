const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
})

artistSchema.virtual('singles', {
  ref: 'Track',
  localField: '_id',
  foreignField: 'artist'
})

artistSchema.virtual('albums', {
  ref: 'Track',
  localField: '_id',
  foreignField: 'artist'
})

artistSchema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Artist', artistSchema)
