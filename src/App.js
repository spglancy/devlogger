import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import Nav from './components/nav'
import Home from './pages/Home'
import Company from './pages/Company'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: true
    }
  }

  render() {
    return (
      <div>
        <Nav auth={this.state.auth} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/companies/:companyId' component={Company} />
        </Switch>
      </div>
    )
  }
}

export default App
