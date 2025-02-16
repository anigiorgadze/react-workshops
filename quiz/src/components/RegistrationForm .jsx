import React, { useState } from 'react';

const RegistrationForm = ({ handleRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // მონაცემების შენახვა localStorage-ში
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        handleRegister(); // რეგისტრაცია წარმატებულია
    };

    return (
        <form className='user-form' onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button   className='user-btn' type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
