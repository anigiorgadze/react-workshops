import React, { useState } from 'react'


const Form = ({ onAuthenticate }) => {
    
    const [user, setUser] =useState({
        userName:"",
        password:""
    })
  
    const isUserValid = user.userName === "digitalAcademy" && user.password === "iLoveReact123"

    const userInfoHandler =(e)=>{
        console.log(e.target)
        setUser((prev)=>(
            {...prev, [e.target.name]:e.target.value}
        ))
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        if (isUserValid) {
            onAuthenticate(true);  // მომხმარებლის ვალიდაცია
        }
    }

  return (
    <form onSubmit={submitHandler}>
        <label>User name</label>
        <input type="text" name="userName" onChange={userInfoHandler}/>
        <label>Password</label>
        <input type="text" name="password" onChange={userInfoHandler}/>
        <button type='submit' disabled={!isUserValid}>Submit</button>
    </form>
  )
}

export default Form
