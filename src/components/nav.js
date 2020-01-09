import React, { Component } from "react"
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import './nav.css'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthed: props.auth,
      searchVal: '',
      post: false
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('dToken')
    if (token) {
      token = jwt_decode(token)
      this.setState({ isAuthed: true })
      fetch(`https://devlogger-intensive.herokuapp.com/company/${token.id}`)
        .then(res => res.json())
        .then(res => {
          if (res.isCompany) {
            this.setState({ post: true })
          }
        })
    }
  }

  search(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className='navCorrection'>
        <nav>
          <Link to='/'><h2>Devlogger</h2></Link>
          {this.state.isAuthed ?
            <ul id="menu">
              {this.state.post ? <li><Link to='/post/new'>New Post<div></div></Link></li> : null}
              <li><form onSubmit={e => this.search(e)}><input placeholder='Search' value={this.state.searchVal} onChange={e => this.setState({ searchVal: e.target.value })}></input></form></li>
              <li><Link to='/'>Following<div></div></Link></li>
              <li><Link to='/' onClick={() => { localStorage.removeItem('dToken'); this.setState({ isAuthed: false }) }}>Logout<div></div></Link></li>
            </ul>
            :
            <ul id="menu">
              {this.state.post ? <li><Link to='/post/new'>New Post<div></div></Link></li> : null}
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
