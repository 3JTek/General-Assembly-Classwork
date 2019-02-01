import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      message: 'Hello Class'
    }
  }
  render(){
    return (
      <main>
        <Header name="Jack" age="29" message={this.state.message}/>
        <Footer />
      </main>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
