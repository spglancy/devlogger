import React, { Component } from "react"
import './nav.css'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthed: true,
      searchVal: ''
    }
  }

  search(e) {
    e.preventDefault()
  }

  render() {
    return (
      <nav>
        <h2>Devlogger</h2>
        {this.state.isAuthed ?
          <ul id="menu">
            <li><a href='#banner'>Home<div></div></a></li>
            <li><form onSubmit={e => this.search(e)}><input placeholder='Search' value={this.state.searchVal} onChange={e => this.setState({ searchVal: e.target.value })}></input></form></li>
            <li><a href='#projects'>Following<div></div></a></li>
            <li><a href='#contact'>Logout<div></div></a></li>
          </ul>
          :
          <ul id="menu">
            <li><a href='#banner'>Home<div></div></a></li>
            <li><form onSubmit={e => this.search(e)}><input placeholder='Search' value={this.state.searchVal} onChange={e => this.setState({ searchVal: e.target.value })}></input></form></li>
            <li><a href='#projects'>Following<div></div></a></li>
            <li><a href='#contact'>Sign Up<div></div></a></li>
            <li><a href='#contact'>Login<div></div></a></li>
          </ul>
        }
      </nav>
    )
  }
}

export default Nav
