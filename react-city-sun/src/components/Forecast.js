import React from 'react'
import moment from 'moment'

const Forecast = ({ city, forecast }) => {

  function getIconClass(icon) {
    const className = icon.replace('partly-', '')
      .split('-')
      .reverse()
      .join('-')

    return `wi wi-${className} is-size-1`
  }

  if(!forecast && !city) return <h1 className="title is-1">Please choose a city</h1>
  if(!forecast) return <h1 className="title is-1">Loading ...</h1>
  return (
    <div>
      <h1 className="title is-1">{city}</h1>
      <h2 className="subtitle is-4">{forecast.summary}</h2>

      <div className="columns">
      {forecast.data.map(day =>
        <div key={day.time} className="column">
          <h4 className="title is-4">{moment.unix(day.time).format('dddd')}</h4>
          <p>
            <i className={getIconClass(day.icon)}></i>
          </p>
          <hr />
          <p>
            {Math.round(day.temperatureLow)}ºC / {Math.round(day.temperatureHigh)}ºC
          </p>
        </div>
      )}
      </div>
    </div>
  )
}

export default Forecast
