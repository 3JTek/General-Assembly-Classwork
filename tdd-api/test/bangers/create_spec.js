/* global api, describe, it, expect, beforeEach */

const Banger = require('../../models/banger')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')

const { bangerData, userData } = require('../mock_data')

let token

describe('POST /bangers', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Banger.remove({})
    ])
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      })
      .then(done)
  })

  it('should return a 401 response', done => {
    api
      .post('/api/bangers')
      .send(bangerData)
      .expect(401, done)
  })

  it('should return a 201 response with a token', done => {
    api
      .post('/api/bangers')
      .set('Authorization', `Bearer ${token}`)
      .send(bangerData[0])
      .expect(201, done)
  })

  it('should return the created banger', done => {
    api
      .post('/api/bangers')
      .set('Authorization', `Bearer ${token}`)
      .send(bangerData[0])
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        expect(res.body).to.include.keys([
          '_id',
          'name',
          'artist',
          'releaseDate',
          'genre',
          'album'
        ])
        done()
      })
  })

  it('should return the correct data', done => {
    api
      .post('/api/bangers')
      .set('Authorization', `Bearer ${token}`)
      .send(bangerData[0])
      .end((err, res) => {
        expect(res.body.name).to.eq(bangerData[0].name)
        expect(res.body.artist).to.eq(bangerData[0].artist)
        expect(res.body.releaseDate).to.deep.eq(bangerData[0].releaseDate)
        expect(res.body.genre).to.eq(bangerData[0].genre)
        expect(res.body.album).to.eq(bangerData[0].album)
        done()
      })
  })
})
