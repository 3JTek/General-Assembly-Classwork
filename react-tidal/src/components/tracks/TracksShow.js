import React from 'react'
import axios from 'axios'

class TracksShow extends React.Component {

  constructor() {
    super()
    this.state = { track: null }
  }

  componentDidMount() {
    axios.get(`/api/tracks/${this.props.match.params.id}`)
      .then(res => this.setState({ track: res.data }))
  }

  render() {
    if(!this.state.track) return (
      <section className="section">
        <div className="container">
          <h4 className="title is-4">Loading...</h4>
        </div>
      </section>
    )
    const { title, image, length } = this.state.track
    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-2">{title}</h2>
          <hr />
          <div className="columns">
            {image && <div className="column">
              <figure className="image">
                <img src={image} alt={title} />
              </figure>
            </div>}

            <div className="column">
              <h3 className="title is-3">{length} seconds</h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TracksShow
