const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  text: { type: String, required: true, maxlength: 250 }
}, {
  timestamps: true
})

const trackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: mongoose.Schema.ObjectId, ref: 'Artist', required: true },
  image: { type: String },
  playCount: { type: Number, required: true, default: 0 },
  length: { type: Number, required: true },
  album: { type: mongoose.Schema.ObjectId, ref: 'Album', required: true },
  comments: [ commentSchema ]
})

module.exports = mongoose.model('Track', trackSchema)
