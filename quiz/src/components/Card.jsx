import React from 'react'


const Card = ({ props,handleAddToCart }) => {
  return (
    <div className='product-item'>
     
      <h3>{props.title}</h3>
      <p>{props.price}</p>
      <button className='add-btn' onClick={() => handleAddToCart(props)}>Add to Cart</button>
    </div>
  )
}

export default Card
