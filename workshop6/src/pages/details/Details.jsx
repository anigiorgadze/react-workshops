import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {

    const { name } = useParams();
    const navigate = useNavigate()
  return (
    
    <div>
      <h2>{decodeURIComponent(name)}</h2>

      <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
  )
}

export default Details
