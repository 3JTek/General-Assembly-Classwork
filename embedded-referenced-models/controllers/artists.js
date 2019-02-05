const Artist = require('../models/artist')

function indexRoute(req, res) {
  Artist
    .find()
    .then(artists => res.json(artists))
}

function showRoute(req, res) {
  Artist
    .findById(req.params.id)
    .populate('singles')
    .then(artist => res.json(artist))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
