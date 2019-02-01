import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Home from './components/Home'
import CheesesIndex from './components/cheeses/CheesesIndex'
import CheesesShow from './components/cheeses/CheesesShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/cheeses">Cheeses Index</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </nav>

          <Switch>
            <Route path="/cheeses/:id" component={CheesesShow} />
            <Route path="/cheeses" component={CheesesIndex} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
