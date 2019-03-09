import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import 'bulma'
import 'weather-icons/css/weather-icons.css'

import Form from './components/Form'
import Forecast from './components/Forecast'

class App extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { value } }) {
    this.setState({ nextCity: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ forecast: null })
    axios.get('/api/forecast', {
      params: { city: this.state.nextCity }
    })
      .then(res => this.setState({ forecast: res.data, city: this.state.nextCity }))
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <hr />
          <Forecast
            city={this.state.city}
            forecast={this.state.forecast}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
