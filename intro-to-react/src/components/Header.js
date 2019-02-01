import React from 'React'

class Header extends React.Component{
  render() {
    return(
      <header>
        <h1>{this.props.name} is {this.props.age}</h1>
        <h2>{this.props.message}</h2>
      </header>
    )
  }
}

export default Header
