import React from 'react'
import axios from 'axios'

class ArtistsShow extends React.Component {

  constructor() {
    super()
    this.state = { artist: null }
  }

  componentDidMount() {
    axios.get(`/api/artists/${this.props.match.params.id}`)
      .then(res => this.setState({ artist: res.data }))
  }

  render() {
    if(!this.state.artist) return (
      <section className="section">
        <div className="container">
          <h4 className="title is-4">Loading...</h4>
        </div>
      </section>
    )
    const { name, image, singles } = this.state.artist
    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-2">{name}</h2>
          <hr />
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>

            <div className="column">
              <h3 className="title is-3">Singles</h3>
              <ul>
                {singles.map(single =>
                  <li key={single._id}>{single.title}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ArtistsShow
