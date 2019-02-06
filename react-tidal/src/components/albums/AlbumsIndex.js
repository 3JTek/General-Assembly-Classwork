import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import Auth from '../../lib/Auth'

class AlbumsIndex extends React.Component {

  constructor() {
    super()
    this.state = { albums: null }
  }

  componentDidMount() {
    axios.get('/api/albums')
      .then(res => this.setState({ albums: res.data }))
  }

  render() {
    if(!this.state.albums) return (
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
            <Link to="/albums/new" className="button is-primary">Add album</Link>
            <hr />
          </header>}
          <div className="columns is-multiline">
            {this.state.albums.map(album =>
              <div key={album._id} className="column is-one-third">
                <Link to={`/albums/${album._id}`}>
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-header-title">{album.title}</h4>
                    </div>
                    <div className="card-image">
                      <figure className="image">
                        <img src={album.image} alt={album.title} />
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

export default AlbumsIndex
