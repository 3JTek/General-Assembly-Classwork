import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import ArtistsForm from './ArtistsForm'

class ArtistsNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      error: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value }
    const error = null
    this.setState({ data, error })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/artists', this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/artists'))
      .catch(() => this.setState({ error: 'An error occured' }))
  }

  render() {
    return(
      <main className="section">
        <div className="container">
          <h2 className="title">New Artist</h2>
          {this.state.error && <div className="notification is-danger">{this.state.error}</div>}
          <ArtistsForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}

export default ArtistsNew
