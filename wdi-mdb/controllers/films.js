const Film = require('../models/film')

function indexRoute(req, res) {
  const {field, ...query} = req.query
  const select = field !== undefined ? field.split(','): ''

  Film
    .find(query)
    .select(select)
    .then(films => res.status(200).json(films))
}

function createRoute(req, res){
  Film
    .create(req.body)
    .then(film => res.status(201).json(film))
    .catch(err => res.status(422).json(err.errors))
}

function showRoute(req, res) {
  Film
    .findById(req.params.id)
    .then(film => res.status(200).json(film))
    .catch(err => console.log(err.message))
}

function updateRoute(req, res) {
  Film
    // .findByIdAndUpdate(req.params.id, req.body, {new: true})
    .findById(req.params.id)
    .then(film => film.set(req.body))
    .then(film => film.save())
    .then(film => res.status(200).json(film) )
    .catch(err => res.status(422).json(err.errors))
}

function deleteRoute(req, res) {
  Film
    .findById(req.params.id)
    .then(film => film.remove())
    .then(() => res.sendStatus(204))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
}
