import React from 'react'

function Card({props}) {
    return (
        <div className='shopping-item'>
            <h3>Lorem, ipsum dolor</h3>
            <img src='https://source.unsplash.com/random/200x300' alt={props.alt} />
            <div className='description'>
                <span>{props.description1}</span>
                <span>{props.description2}</span>
            </div>
            <div className='badges'>
                <span class="badge-1">{props.badge1}</span>
                <span class="badge-2">{props.badge2}</span>
            </div>
            <button>Add to Cart</button>
        </div>
    )
}

export default Card
