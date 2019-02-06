import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import Auth from '../../lib/Auth'

class TracksIndex extends React.Component {

  constructor() {
    super()
    this.state = { tracks: null }
  }

  componentDidMount() {
    axios.get('/api/tracks')
      .then(res => this.setState({ tracks: res.data }))
  }

  render() {
    if(!this.state.tracks) return (
      <section className="section">
        <div className="container">
          <h4 className="title is-4">Loading...</h4>
        </div>
      </section>
    )
    return (
      <section className="section">
        <div className="container">
          {Auth.isAuthenticated() && <header>
            <Link to="/tracks/new" className="button is-primary">Add track</Link>
            <hr />
          </header>}
          <div className="columns is-multiline">
            {this.state.tracks.map(track =>
              <div key={track._id} className="column is-one-third">
                <Link to={`/tracks/${track._id}`}>
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-header-title">{track.title}</h4>
                    </div>
                    {track.image && <div className="card-image">
                      <figure className="image">
                        <img src={track.image} alt={track.title} />
                      </figure>
                    </div>}
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default TracksIndex
