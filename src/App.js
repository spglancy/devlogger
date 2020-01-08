import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import Nav from './components/nav'
import Home from './pages/Home'
import Company from './pages/Company'
import Login from './pages/login'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/company/:companyId' component={Company} />
          <Route path='/login' render={(props) => <Login {...props} register={false} />} />
          <Route path='/register' render={(props) => <Login {...props} register={true} />} />
        </Switch>
      </div>
    )
  }
}

export default App
