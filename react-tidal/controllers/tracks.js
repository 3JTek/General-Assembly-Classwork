const Track = require('../models/track')

function indexRoute(req, res) {
  Track
    .find()
    .populate([
      { path: 'track', select: 'name' },
      { path: 'album', select: 'title' }
    ])
    .then(tracks => res.json(tracks))
}


function showRoute(req, res) {
  Track
  .findById(req.params.id)
  .populate('artist album comments.user')
  .then(track => res.json(track))
}

function createRoute(req, res) {
  Track
    .create(req.body)
    .then(track => res.status(201).json(track))
    .catch(err => res.status(422).json(err.errors))
}

function updateRoute(req, res) {
  Track
    .findById(req.params.id)
    .then(track => track.set(req.body))
    .then(track => track.save())
    .then(track => res.json(track))
    .catch(err => res.status(422).json(err.errors))
}

function deleteRoute(req, res) {
  Track
    .findById(req.params.id)
    .then(track => track.remove())
    .then(() => res.sendStatus(204))
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
    .catch(err => res.status(422).json(err.errors))
}

function commentDeleteRoute(req, res) {
  Track
    .findById(req.params.id)
    .then(track => {
      const comment = track.comments.id(req.params.commentId)
      return comment.remove()
    })
    .then(track => res.json(track))
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
}
