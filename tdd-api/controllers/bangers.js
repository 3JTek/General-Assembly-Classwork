const Banger = require('../models/banger')

function indexRoute(req, res, next) {
  return Banger.find()
    .sort('name')
    .then(bangers => res.json(bangers))
    .catch(next)
}

function createRoute(req, res, next) {
  return Banger.create(req.body)
    .then(banger => res.status(201).json(banger))
    .catch(next)
}

function showRoute(req, res, next) {
  return Banger.findById(req.params.id)
    .then(banger => res.json(banger))
    .catch(next)
}

function updateRoute(req, res, next) {
  return Banger.findById(req.params.id)
    .then(banger => Object.assign(banger, req.body))
    .then(banger => banger.save())
    .then(banger => res.json(banger))
    .catch(next)
}

function deleteRoute(req, res, next) {
  return Banger.findById(req.params.id)
    .then(banger => banger.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
}
