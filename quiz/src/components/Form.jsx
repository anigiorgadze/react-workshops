import React, { useState } from 'react'


const Form = ({ onAuthenticate }) => {

    const [user, setUser] = useState({
        userName: "",
        password: ""
    })
    const [errorMessage, setErrorMessage] = useState("");
    // const isUserValid = user.userName === "random@gmail.com" && user.password === "random123"

    const userInfoHandler = (e) => {
        console.log(e.target)
        setUser((prev) => (
            { ...prev, [e.target.name]: e.target.value }
        ))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        
        if (user.userName === storedEmail && user.password === storedPassword) {
            onAuthenticate(true); // შესვლა წარმატებით
            setErrorMessage("");  // თუ მონაცემები სწორი იყო, შეცდომა გატარდება
        } else {
            setErrorMessage("Invalid email or password");
        }
    }

    return (
        <div className='user-div'>

            <form className='user-form' onSubmit={submitHandler}>
                <h1>Log In</h1>
                <div >
                    <label>User name</label>
                    <input type="text" name="userName" value={user.userName} onChange={userInfoHandler} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" value={user.password} onChange={userInfoHandler} />
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                <button
                    className='user-btn'
                    type='submit'
                    disabled={!user.userName || !user.password}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form
