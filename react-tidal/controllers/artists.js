const Artist = require('../models/artist')

function indexRoute(req, res) {
  Artist
    .find()
    .then(artists => res.json(artists))
}

function showRoute(req, res) {
  Artist
    .findById(req.params.id)
    .populate('singles albums')
    .then(artist => res.json(artist))
}

function createRoute(req, res) {
  Artist
    .create(req.body)
    .then(artist => res.status(201).json(artist))
    .catch(err => res.status(422).json(err.errors))
}

function updateRoute(req, res) {
  Artist
    .findById(req.params.id)
    .then(artist => artist.set(req.body))
    .then(artist => artist.save())
    .then(artist => res.json(artist))
    .catch(err => res.status(422).json(err.errors))
}

function deleteRoute(req, res) {
  Artist
    .findById(req.params.id)
    .then(artist => artist.remove())
    .then(() => res.sendStatus(204))
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
}
