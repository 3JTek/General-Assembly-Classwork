import React from 'react'
import axios from 'axios'

class AlbumsShow extends React.Component {

  constructor() {
    super()
    this.state = { album: null }
  }

  componentDidMount() {
    axios.get(`/api/albums/${this.props.match.params.id}`)
      .then(res => this.setState({ album: res.data }))
  }

  render() {
    if(!this.state.album) return (
      <section className="section">
        <div className="container">
          <h4 className="title is-4">Loading...</h4>
        </div>
      </section>
    )
    const { title, image, tracks } = this.state.album
    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-2">{title}</h2>
          <hr />
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={title} />
              </figure>
            </div>

            <div className="column">
              <h3 className="title is-3">Tracks</h3>
              <ul>
                {tracks.map(track =>
                  <li key={track._id}>{track.title}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AlbumsShow
