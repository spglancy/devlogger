import React from 'react'
import { Link } from 'react-router-dom'
import './post.css'


function Post(props) {
  return (
    <div className='card'>
      <div>
        <div className='authorData'>
          <img src='#' alt='' />
          <Link to={`/company/${props.content.userId}`}>{props.content.author}</Link>
        </div>
        <h2>{props.content.title}</h2>
      </div>
      <p>{props.content.content}</p>
    </div>
  )
}

export default Post