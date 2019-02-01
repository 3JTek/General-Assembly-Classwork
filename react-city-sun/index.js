require('dotenv').config()

const express = require('express')
const rp = require('request-promise')

const app = express()

app.get('/forecast', (req, res) => {
  rp({
    method: 'GET',
    url: 'https://api.opencagedata.com/geocode/v1/json',
    qs: {
      key: process.env.OPEN_CAGE_KEY,
      q: req.query.city
    },
    json: true
  })
    .then(response => {
      const { lat, lng } = response.results[0].geometry
      return rp({
        method: 'GET',
        url: `https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/${lat},${lng}`,
        json: true,
        qs: { units: 'si' }
      })
    })
    .then(response => {
      const forecast = response.daily
      forecast.data = forecast.data.map(day => ({
        time: day.time,
        summary: day.summary,
        icon: day.icon,
        temperatureHigh: day.temperatureHigh,
        temperatureLow: day.temperatureLow
      }))

      return res.json(forecast)
    })
    .catch(err => res.status(500).json(err))
})

app.listen(4000, () => console.log('Express is listening to port 4000'))
