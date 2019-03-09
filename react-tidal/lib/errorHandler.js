function errorHandler(err, req, res, next) {
  console.log(err.errors)
  if( err.name === 'ValidationError'){
    Object.keys(err.errors).forEach(key => {
      err.errors[key] = err.errors[key].message
    })

    return res.status(422).json(err)
  }

  res.status(500).json(err.message)

  next(err)
}

module.exports = errorHandler
