import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Redirect } from 'react-router-dom'
import './newpost.css'

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      redirect: false
    }
  }

  handlePost() {
    const token = jwt_decode(localStorage.getItem('dToken'))
    const { title, content } = this.state
    fetch('http://localhost:4000/post/new', { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, content, author: token.name, userId: token.id }) })
      .then(res => {
        if (res.status == 200) {
          this.setState({ redirect: true })
        }
      })
  }

  render() {
    return (
      <div className='newPost'>
        {this.state.redirect ? <Redirect to='/' /> : null}
        <input type='text' placeholder="Title" value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
        <textarea placeholder="Write post here" value={this.state.content} onChange={e => this.setState({ content: e.target.value })} />
        <span onClick={() => this.handlePost()}>Make Post</span>
      </div>
    )
  }
}

export default NewPost