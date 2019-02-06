const Album = require('../models/album')

function indexRoute(req, res) {
  Album
    .find()
    .then(albums => res.json(albums))
}

function showRoute(req, res) {
  Album
    .findById(req.params.id)
    .populate('tracks')
    .then(album => res.json(album))
}

function createRoute(req, res) {
  Album
    .create(req.body)
    .then(album => res.status(201).json(album))
    .catch(err => res.status(422).json(err.errors))
}

function updateRoute(req, res) {
  Album
    .findById(req.params.id)
    .then(album => album.set(req.body))
    .then(album => album.save())
    .then(album => res.json(album))
    .catch(err => res.status(422).json(err.errors))
}

function deleteRoute(req, res) {
  Album
    .findById(req.params.id)
    .then(album => album.remove())
    .then(() => res.sendStatus(204))
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
}
