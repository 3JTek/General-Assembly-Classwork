const Artist = require('../models/artist')

function indexRoute(req, res, next) {
  Artist
    .find()
    .then(artists => res.json(artists))
    .catch(next)
}

function showRoute(req, res, next) {
  Artist
    .findById(req.params.id)
    .populate('singles albums')
    .then(artist => res.json(artist))
    .catch(next)
}

function createRoute(req, res, next) {
  Artist
    .create(req.body)
    .then(artist => res.status(201).json(artist))
    .catch(next)
}

function updateRoute(req, res, next) {
  Artist
    .findById(req.params.id)
    .then(artist => artist.set(req.body))
    .then(artist => artist.save())
    .then(artist => res.json(artist))
    .catch(next)
}

function deleteRoute(req, res, next) {
  Artist
    .findById(req.params.id)
    .then(artist => artist.remove())
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
