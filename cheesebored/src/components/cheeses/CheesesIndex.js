import React from 'react'
import axios from 'axios'

import CheeseCard from './CheeseCard'

class CheesesIndex extends React.Component {

  constructor() {
    super()

    this.state = {
      cheeses: []
    }
  }

  componentDidMount() {
    axios.get('https://cheesebored.herokuapp.com/cheeses')
      .then(res => this.setState({ cheeses: res.data }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.cheeses.map(cheese =>
              <div className="column is-one-quarter" key={cheese._id}>
                <CheeseCard {...cheese} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default CheesesIndex
