import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import Nav from './components/nav'
import Home from './pages/Home'
import Company from './pages/Company'
import Login from './pages/login'
import NewPost from './pages/newpost'
import jwt_decode from 'jwt-decode'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: false
    }
  }

  setAuth() {
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' render={props => <Home {...props} setAuth={this.setAuth.bind(this)} />} />
          <Route path='/company/:companyId' component={Company} />
          <Route path='/login' render={(props) => <Login {...props} register={false} />} />
          <Route path='/register' render={(props) => <Login {...props} register={true} />} />
          <Route path='/post/new' component={NewPost} />
        </Switch>
      </div>
    )
  }
}

export default App
