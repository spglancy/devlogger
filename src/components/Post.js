import React from 'react'
import './post.css'


function Post(props) {
  return (
    <div className='card'>
      <div>
        <div className='authorData'>
          <img src='#' alt='' />
          <h3>{props.content.author}</h3>
        </div>
        <h2>{props.content.title}</h2>
      </div>
      <p>{props.content.content}</p>
    </div>
  )
}

export default Post