import React from 'react'
import { useNavigate } from 'react-router-dom'


const Error = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Page not found</h1>
      <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
  )
}

export default Error
