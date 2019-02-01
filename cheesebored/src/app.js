import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SecureRoute from './components/common/SecureRoute'
import FlashMessages from './components/common/FlashMessages'
import Navbar from './components/common/Navbar'
import Home from './components/Home'
import CheesesIndex from './components/cheeses/CheesesIndex'
import CheesesShow from './components/cheeses/CheesesShow'
import CheesesNew from './components/cheeses/CheesesNew'
import CheesesEdit from './components/cheeses/CheesesEdit'
import Register from './components/auth/Register'
import Login from './components/auth/Login'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>

          <Navbar />
          <FlashMessages />

          <Switch>
            <SecureRoute path="/cheeses/new" component={CheesesNew} />
            <SecureRoute path="/cheeses/:id/edit" component={CheesesEdit} />
            <Route path="/cheeses/:id" component={CheesesShow} />
            <Route path="/cheeses" component={CheesesIndex} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
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
