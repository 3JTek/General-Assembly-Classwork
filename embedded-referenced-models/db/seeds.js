const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Artist = require('../models/artist')
const Album = require('../models/album')
const Track = require('../models/track')

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        artist: Artist.create({
          name: 'Prodigy',
          image: 'https://i.ebayimg.com/images/g/LtAAAOSwEEBaNocc/s-l1600.jpg'
        }),
        album: Album.create({
          title: 'Fat of the Land',
          genre: 'Electronica',
          image: 'https://upload.wikimedia.org/wikipedia/en/3/3b/TheProdigy-TheFatOfTheLand.jpg',
          releaseDate: '1997-06-30'
        })
      })
    })
    .then(data => {
      return Track.create({
        title: 'Firestarter',
        length: 280,
        album: data.album,
        artist: data.artist
      })
  })
  .then(() => console.log('Database successfully seeded'))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close())
})
