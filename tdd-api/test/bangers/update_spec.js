/* global api, describe, it, expect, beforeEach */

const Banger = require('../../models/banger')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')

const { bangerData, userData } = require('../mock_data')

let token, banger

describe('PUT /bangers/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Banger.remove({})
    ])
      .then(() => Promise.props({
        banger: Banger.create(bangerData[0]),
        user: User.create(userData)
      }))
      .then(data => {
        banger = data.banger
        token = jwt.sign({ sub: data.user._id }, secret, { expiresIn: '5m' })
      })
      .then(done)
  })

  it('should return a 401 response', done => {
    api
      .put(`/api/bangers/${banger._id}`)
      .expect(401, done)
  })

  it('should return a 200 response with a token', done => {
    api
      .put(`/api/bangers/${banger._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(bangerData[1])
      .expect(200, done)
  })

  it('should return a banger', done => {
    api
      .put(`/api/bangers/${banger._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(bangerData[1])
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
      .put(`/api/bangers/${banger._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(bangerData[1])
      .end((err, res) => {
        expect(res.body.name).to.eq(bangerData[1].name)
        expect(res.body.address).to.eq(bangerData[1].address)
        expect(res.body.location).to.deep.eq(bangerData[1].location)
        expect(res.body.image).to.eq(bangerData[1].image)
        expect(res.body.rating).to.eq(bangerData[1].rating)
        expect(res.body.price).to.eq(bangerData[1].price)
        done()
      })
  })
})
