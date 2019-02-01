import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

import Header from './components/Header'
import GeneralInfo from './components/GeneralInfo'
import DonorInfo from './components/DonorInfo'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: 'Exhibit',
      imageUrl: 'http://4.bp.blogspot.com/-TJ0z3tlqB7g/VbqbuPx2R8I/AAAAAAAAsRQ/39A_pre6DRI/s1600/Sargent_DIGITAL_Hero.jpg',
      hours: [
        {
          day: 'Monday',
          opening: '9:00',
          closing: '17:00'
        },
        {
          day: 'Tuesday',
          opening: '10:00',
          closing: '19:00'
        }
      ]
    }
  }
  render(){
    return(
      <div>
        <h1>The Metropolitan Museum of Art</h1>
        <Header title={this.state.title} imageUrl={this.state.imageUrl}/>
        <GeneralInfo hours={this.state.hours}/>
        <DonorInfo/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
