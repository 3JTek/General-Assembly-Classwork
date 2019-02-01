import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class CheesesShow extends React.Component {

  constructor() {
    super()

    this.state = {}

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get(`https://cheesebored.herokuapp.com/cheeses/${this.props.match.params.id}`)
      .then(res => this.setState({ cheese: res.data }))
  }

  handleDelete() {
    axios.delete(`https://cheesebored.herokuapp.com/cheeses/${this.props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/cheeses'))
      .catch(err => console.log(err))
  }

  render() {
    if(!this.state.cheese) return null
    const { _id, name, origin, image, tastingNotes } = this.state.cheese
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{name}</h1>
          <h2 className="subtitle is-2">{origin}</h2>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>

            <div className="column">
              <h4 className="title is-4">Tasting Notes</h4>
              <p>{tastingNotes}</p>
              <hr />

              <Link to={`/cheeses/${_id}/edit`} className="button is-info">Edit</Link>
              <button onClick={this.handleDelete} className="button is-danger">Delete</button>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default CheesesShow
