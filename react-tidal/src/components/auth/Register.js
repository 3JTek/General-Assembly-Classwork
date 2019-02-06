import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      error: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target: {name, value }}) {
    const data = {...this.state.data, [name]: value }
    const error = null
    this.setState({ data, error })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(() => this.setState({ error: 'An error occured' }))
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          {this.state.error && <div className="notification is-danger">{this.state.error}</div>}
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Register</h2>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                  value={this.state.data.username}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={this.state.data.email}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={this.state.data.password}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Confirm Password</label>
              <div className="control">
                <input
                  className="input"
                  name="passwordConfirmation"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={this.handleChange}
                  value={this.state.data.passwordConfirmation}
                />
              </div>
            </div>

            <button className="button is-info">Submit</button>

          </form>
        </div>
      </main>
    )
  }
}

export default Register
