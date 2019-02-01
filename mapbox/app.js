/* global mapboxgl*/

document.addEventListener('DOMContentLoaded', () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiM2p0ZWNobm8iLCJhIjoiY2pyMjNhY2NlMTMwdDQzcGM4dGRwOHBrZSJ9.sHLrYdbbZfH-8v4Nr_H0JQ'

  const mapDOM = document.querySelector('.mapbox')

  new mapboxgl.Map({
    container: mapDOM,
    style: 'mapbox://styles/mapbox/streets-v9',
    center: { lat: 51.512, lng: -0.0785 }
  })
})
