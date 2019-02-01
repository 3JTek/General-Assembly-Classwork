import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'

import TaskForm from './components/TaskForm'
import Task from './components/Task'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: [
        {
          task: 'Make an App',
          completed: false
        }
      ],
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({inputValue: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    const newItem = this.state.inputValue
    this.setState({todos: [...this.state.todos, {task: newItem, completed: false}], inputValue: ''})
  }

  render() {
    return (
      <main>
        <h1>You have 1 thing(s) to do!</h1>
        <Task todos={this.state.todos}/>
        <TaskForm
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          handleSubmit={this.handleSubmit}
        />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
