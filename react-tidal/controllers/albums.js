const Album = require('../models/album')

function indexRoute(req, res, next) {
  Album
    .find()
    .then(albums => res.json(albums))
    .catch(next)
}

function showRoute(req, res, next) {
  Album
    .findById(req.params.id)
    .populate('tracks')
    .then(album => res.json(album))
    .catch(next)
}

function createRoute(req, res, next) {
  Album
    .create(req.body)
    .then(album => res.status(201).json(album))
    .catch(next)
}

function updateRoute(req, res, next) {
  Album
    .findById(req.params.id)
    .then(album => album.set(req.body))
    .then(album => album.save())
    .then(album => res.json(album))
    .catch(next)
}

function deleteRoute(req, res, next) {
  Album
    .findById(req.params.id)
    .then(album => album.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
}
