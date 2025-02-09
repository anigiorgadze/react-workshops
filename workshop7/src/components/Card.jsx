import React from 'react'


const Card = ({ props, onDelete }) => {
  return (
    <div className='post-item'>
      {/* X ღილაკი, რომელიც გამოჩნდება როდესაც მას დააწკაპუნებთ */}
      <button className='x-btn' onClick={() => onDelete(props.id)}>X</button>

      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}

export default Card
