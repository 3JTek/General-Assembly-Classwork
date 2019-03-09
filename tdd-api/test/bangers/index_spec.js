/* global api, describe, it, expect, beforeEach */

const Banger = require('../../models/banger')
const User = require('../../models/user')

const { bangerData } = require('../mock_data')

describe('GET /bangers', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Banger.remove({})
    ])
      .then(() => Banger.create(bangerData))
      .then(() => done())
  })

  it('should return a 200 response', done => {
    api
      .get('/api/bangers')
      .expect(200, done)
  })

  it('should return an array of bangers', done => {
    api
      .get('/api/bangers')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        res.body.forEach(banger => {
          expect(banger).to.include.keys([
            '_id',
            'name',
            'artist',
            'releaseDate',
            'genre',
            'album'
          ])
        })
        done()
      })
  })

  it('should return the correct data', done => {
    api
      .get('/api/bangers')
      .end((err, res) => {
        res.body.forEach((banger, i) => {
          expect(banger.name).to.eq(bangerData[i].name)
          expect(banger.address).to.eq(bangerData[i].address)
          expect(banger.location).to.deep.eq(bangerData[i].location)
          expect(banger.image).to.eq(bangerData[i].image)
          expect(banger.rating).to.eq(bangerData[i].rating)
          expect(banger.price).to.eq(bangerData[i].price)
        })
        done()
      })
  })
})
