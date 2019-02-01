import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import InfoTraffic from './components/InfoTraffic'


class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      lineTrafficInfo: null
    }
  }

  componentDidMount(){
    axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
      .then(({data}) => this.setState({lineTrafficInfo: data}))
      .catch(err => console.log(err.message))
  }

  render(){
    return(
      <div>
        {this.state.lineTrafficInfo ?
          <div>
            <InfoTraffic data={this.state.lineTrafficInfo}/>
          </div>
          :
          <p>Loading</p>
        }
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
