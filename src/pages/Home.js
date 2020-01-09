import React, { Component } from 'react'
import Post from '../components/Post'
import './home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    this.props.setAuth()
    fetch('https://devlogger-intensive.herokuapp.com/allposts')
      .then(res => res.json())
      .then(posts => {
        this.setState({
          posts: posts.map(post => {
            return <Post key={post.title} content={post} />
          })
        })
      })
  }

  render() {
    return (
      <div className='homeContainer'>
        {this.state.posts}
      </div>
    )
  }
}

export default Home