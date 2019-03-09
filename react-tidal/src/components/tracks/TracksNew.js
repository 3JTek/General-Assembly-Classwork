import React from 'react'
import axios from 'axios'
import Promise from 'bluebird'
import Auth from '../../lib/Auth'

import TracksForm from './TracksForm'

class TracksNew extends React.Component {
  constructor() {
    super()

    this.state = {
      artists: [],
      albums: [],
      data: {},
      error: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    Promise.props({
      artists: axios.get('/api/artists').then(res => res.data),
      albums: axios.get('/api/albums').then(res => res.data)
    })
      .then(({artists, albums}) => {
        this.setState({artists, albums})
      })
  }

  handleChange({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value }
    const error = null
    this.setState({ data, error })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/tracks', this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/tracks'))
      .catch(() => this.setState({ error: 'An error occured' }))
  }

  render() {
    this.state.albums && console.log('res',this.state)

    return(
      <main className="section">
        <div className="container">
          <h2 className="title">New Track</h2>
          {this.state.error && <div className="notification is-danger">{this.state.error}</div>}
          <TracksForm
            artists={this.state.artists}
            albums={this.state.albums}
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}

export default TracksNew
