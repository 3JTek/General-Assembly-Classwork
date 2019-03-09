/* global api, describe, it, expect, beforeEach */

const Banger = require('../../models/banger')
const User = require('../../models/user')

const { bangerData } = require('../mock_data')

let banger

describe('GET /bangers/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Banger.remove({})
    ])
      .then(() => Banger.create(bangerData))
      .then(bangers => banger = bangers[0])
      .then(() => done())
  })

  it('should return a 200 response', done => {
    api
      .get(`/api/bangers/${banger._id}`)
      .expect(200, done)
  })

  it('should return a banger', done => {
    api
      .get(`/api/bangers/${banger._id}`)
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
      .get(`/api/bangers/${banger._id}`)
      .end((err, res) => {
        expect(res.body.name).to.eq(bangerData[0].name)
        expect(res.body.address).to.eq(bangerData[0].address)
        expect(res.body.location).to.deep.eq(bangerData[0].location)
        expect(res.body.image).to.eq(bangerData[0].image)
        expect(res.body.rating).to.eq(bangerData[0].rating)
        expect(res.body.price).to.eq(bangerData[0].price)
        done()
      })
  })
})
