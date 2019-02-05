const Track = require('../models/track')

function indexRoute(req, res) {
  Track
    .find()
    .populate({ path: 'artist', select: 'name' })
    .then(tracks => res.json(tracks))
}

function showRoute(req, res) {
  Track
    .findById(req.params.id)
    .populate([{
      path: 'artist', select: 'name image'
    }, {
      path: 'album', select: 'title releaseDate'
    }, {
      path: 'comments.user', select: '-email'
    }])
    .then(track => res.json(track))
}

function commentCreateRoute(req, res) {
  req.body.user = req.currentUser
  Track
    .findById(req.params.id)
    .then(track => {
      track.comments.push(req.body)
      return track.save()
    })
    .then(track => res.status(201).json(track))
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  commentCreate: commentCreateRoute
}
