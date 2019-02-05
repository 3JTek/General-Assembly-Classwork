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

module.exports = {
  index: indexRoute,
  show: showRoute
}
