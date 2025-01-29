import React, { useState } from 'react'


function Forms({ onLogin }) {
    const [user, setUser] = useState({
        Email: '',
        password: '',
    });
    const disabled = user.Email && user.password;

    const setUserHandler = (e) => {
        setUser((prev) => ({ ...prev, Email: e.target.value }))
    }

    const setPassHandler = (e) => {
        setUser((prev) => ({ ...prev, password: e.target.value }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        setUser({
            Email: '',
            password: '',
        });

        onLogin(user);

    }

    return (
        <form className='log-in' onSubmit={submitHandler}>
            <div >
                <label htmlFor='Email'>Email:</label>
                <input value={user.Email} placeholder='Email' onChange={setUserHandler} />
            </div>
            <div>
                <label htmlFor='Password'>Password: </label>
                <input type='password' value={user.password} placeholder='Password' onChange={setPassHandler} />
            </div>
            <button disabled={!disabled} type='submit'>Submit</button>


        </form>
    )
}

export default Forms
