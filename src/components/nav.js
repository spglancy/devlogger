import React, { Component } from "react"
import { Link } from 'react-router-dom'
import './nav.css'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthed: false,
      searchVal: ''
    }
  }

  componentDidMount() {
    if (localStorage.getItem('dToken')) {
      this.setState({ isAuthed: true })
    }
  }

  search(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className='navCorrection'>
        <nav>
          <h2>Devlogger</h2>
          {this.state.isAuthed ?
            <ul id="menu">
              <li><Link to='/'>Home<div></div></Link></li>
              <li><form onSubmit={e => this.search(e)}><input placeholder='Search' value={this.state.searchVal} onChange={e => this.setState({ searchVal: e.target.value })}></input></form></li>
              <li><Link to='/'>Following<div></div></Link></li>
              <li><a onClick={() => { localStorage.removeItem('dToken'); this.setState({ isAuthed: false }) }}>Logout<div></div></a></li>
            </ul>
            :
            <ul id="menu">
              <li><Link to='/'>Home<div></div></Link></li>
              <li><form onSubmit={e => this.search(e)}><input placeholder='Search' value={this.state.searchVal} onChange={e => this.setState({ searchVal: e.target.value })}></input></form></li>
              <li><Link to='/'>Following<div></div></Link></li>
              <li><Link to='/register'>Sign Up<div></div></Link></li>
              <li><Link to='/login'>Login<div></div></Link></li>
            </ul>
          }
        </nav>
      </div>
    )
  }
}

export default Nav
