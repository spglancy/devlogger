import React, { Component } from 'react'
import Post from '../components/Post'
import './company.css'

class Company extends Component {
  constructor(props) {
    super(props)
    this.state = {
      companyId: props.match.params.companyId,
      content: '',
      name: '',
      posts: []
    }
  }

  componentDidMount() {
    fetch(`https://devlogger-intensive.herokuapp.com/company/${this.state.companyId}`)
      .then(res => res.json())
      .then(company => {
        const { companyName, companyInfo, posts } = company
        this.setState({ companyName, companyInfo, posts })
      })
  }

  renderPosts() {
    return this.state.posts.map(post => {
      return <Post key={post.title} content={post} />
    })
  }

  render() {
    return (
      <div className='mainContainer'>
        <div className='companyHeader'>
          <img src='#' alt='placeholder' />
          <div className='companyInfo'>
            <h1>{this.state.companyName}</h1>
            <p>{this.state.companyInfo}</p>
          </div>
          <div>
            <span>Follow</span>
            <span>Donate</span>
          </div>
        </div>
        <div className='posts'>
          {this.renderPosts()}
        </div>
      </div>
    )
  }
}

export default Company