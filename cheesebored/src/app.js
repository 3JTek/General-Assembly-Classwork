import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Home from './components/Home'
import CheesesIndex from './components/CheesesIndex'
import CheesesShow from './components/CheesesShow'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/cheeses">Cheeses Index</Link>
          </nav>

          <Switch>
            <Route path="/cheeses/:id" component={CheesesShow} />
            <Route path="/cheeses" component={CheesesIndex} />
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
