import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import CheeseForm from './CheeseForm'

class CheesesEdit extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        origin: '',
        image: '',
        tastingNotes: ''
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`https://cheesebored.herokuapp.com/cheeses/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
  }

  handleChange({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: null }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios
      .put(`https://cheesebored.herokuapp.com/cheeses/${this.props.match.params.id}`, this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push(`/cheeses/${this.props.match.params.id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return(
      <main className="section">
        <div className="container">
          <h2 className="title">Edit Cheese</h2>
          <CheeseForm
            data={this.state.data}
            errors={this.state.errors}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}

export default CheesesEdit
