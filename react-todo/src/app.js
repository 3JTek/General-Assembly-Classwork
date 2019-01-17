import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'

import TaskForm from './components/TaskForm'

class App extends React.Component {

  render() {
    return (
      <main>
        <h1>You have 1 thing(s) to do!</h1>
        <ul>
          <li>Make a todo app</li>
        </ul>

        <TaskForm />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
