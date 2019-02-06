const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true }
})

albumSchema.virtual('tracks', {
  ref: 'Track',
  localField: '_id',
  foreignField: 'album'
})

albumSchema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Album', albumSchema)
