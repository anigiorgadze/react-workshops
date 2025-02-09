import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({props}) => {
    const navigate = useNavigate()
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.web_pages}</p>
      <button onClick={()=> navigate(`/university/${encodeURIComponent(props.name)}`)}>Details</button>
    </div>
  )
}

export default Card
