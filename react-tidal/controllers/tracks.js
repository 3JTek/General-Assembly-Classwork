const Track = require('../models/track')

function indexRoute(req, res, next) {
  Track
    .find()
    .populate([
      { path: 'track', select: 'name' },
      { path: 'album', select: 'title' }
    ])
    .then(tracks => res.json(tracks))
    .catch(next)
}

function showRoute(req, res, next) {
  Track
    .findById(req.params.id)
    .populate('artist album comments.user')
    .then(track => res.json(track))
    .catch(next)
}

function createRoute(req, res, next) {
  Track
    .create(req.body)
    .then(track => res.status(201).json(track))
    .catch(next)
}

function updateRoute(req, res, next) {
  Track
    .findById(req.params.id)
    .then(track => track.set(req.body))
    .then(track => track.save())
    .then(track => res.json(track))
    .catch(next)
}

function deleteRoute(req, res, next) {
  Track
    .findById(req.params.id)
    .then(track => track.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

function commentCreateRoute(req, res, next) {
  req.body.user = req.currentUser
  Track
    .findById(req.params.id)
    .then(track => {
      track.comments.push(req.body)
      return track.save()
    })
    .then(track => res.status(201).json(track))
    .catch(next)
}

function commentDeleteRoute(req, res, next) {
  Track
    .findById(req.params.id)
    .then(track => {
      const comment = track.comments.id(req.params.commentId)
      return comment.remove()
    })
    .then(track => res.json(track))
    .catch(next)
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
