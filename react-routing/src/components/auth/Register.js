import React from 'react'

import axios from 'axios'

class Register extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {
        name: '',
        value: ''
      }
    }
  }

  handleChange({target: {name, value}}){
    this.setState({data: {...this.state.data}, [name]: value})
  }

  handleSubmit(){
    axios.post('http://cheesebored/register', this.state.data)
      .then(() => this.props.history.push('/login'))
  }

  render(){
    return(
      <h1>hello</h1>
    )
  }
}

export default Register
