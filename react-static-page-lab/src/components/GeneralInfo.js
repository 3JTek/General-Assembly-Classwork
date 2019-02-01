import React from 'React'

class GeneralInfo extends React.Component{
  render() {
    return(
      <div>
        <ul>
          {this.props.hours.map(hour => <li key={hour.day} > {hour.day} - {hour.opening} - {hour.closing} </li>)}
        </ul>
      </div>
    )
  }
}

export default GeneralInfo
