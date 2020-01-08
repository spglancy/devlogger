import React, { Component } from 'react'
import './company.css'

class Company extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='mainContainer'>
        <h1>{this.state.company}</h1>
      </div>
    )
  }
}

export default Company