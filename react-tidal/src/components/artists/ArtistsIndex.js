import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import Auth from '../../lib/Auth'

class ArtistsIndex extends React.Component {

  constructor() {
    super()
    this.state = { artists: null }
  }

  componentDidMount() {
    axios.get('/api/artists')
      .then(res => this.setState({ artists: res.data }))
  }

  render() {
    if(!this.state.artists) return (
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
            <Link to="/artists/new" className="button is-primary">Add artist</Link>
            <hr />
          </header>}
          <div className="columns is-multiline">
            {this.state.artists.map(artist =>
              <div key={artist._id} className="column is-one-third">
                <Link to={`/artists/${artist._id}`}>
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-header-title">{artist.name}</h4>
                    </div>
                    <div className="card-image">
                      <figure className="image">
                        <img src={artist.image} alt={artist.name} />
                      </figure>
                    </div>
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

export default ArtistsIndex
