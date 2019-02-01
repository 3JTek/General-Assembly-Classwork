import React from 'react'

import axios from 'axios'

class Login extends React.Component{
  constructor(){
    super()
  }


  handleSubmit(){
    axios.post('http://cheesebored/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/cheeses')
      })
  }

  handleChange({target: {name, value}}){
    this.setState({data: {...data}, [name]: value})
  }

  render(){
    return(

    )
  }

}

export default Login
