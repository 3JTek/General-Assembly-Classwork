const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true }
}, {
  id: false
})

albumSchema.virtual('tracks', {
  ref: 'Track',
  localField: '_id',
  foreignField: 'album'
})

albumSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.__v
    return json
  }
})

module.exports = mongoose.model('Album', albumSchema)
