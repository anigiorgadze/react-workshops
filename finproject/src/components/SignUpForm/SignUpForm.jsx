import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../../constants/routes';
import { authHandler } from '../../api/auth';
import authAction from '../../constants/authAction';

const SignUpForm = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({ userName: '', email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);



        try {
            const response = await authHandler(authAction.signUp, userInfo);
      

            if (!response || !response.token) {
                throw new Error("Registration successful. Now please Sign In.");
            }

            // **Sign Up-ის შემდეგ გადამისამართება Sign In-ზე**
            navigate(routes.singIn, { state: { success: true } });

        } catch (error) {
           
            setError(error.message || "Sign Up failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className='sign-form' onSubmit={submitHandler}>
            <label>User Name:</label>
            <input
                type="text"
                placeholder='User Name'
                name='userName'
                value={userInfo.userName}
                onChange={(e) => setUserInfo({ ...userInfo, userName: e.target.value })}
            />

            <label>Email:</label>
            <input
                type="email"
                placeholder='Email'
                name='email'
                value={userInfo.email}
                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            />

            <label>Password:</label>
            <input
                type="password"
                placeholder='Password'
                name='password'
                value={userInfo.password}
                onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
            />

            <button type='submit' disabled={isLoading}>
                {isLoading ? "Signing Up..." : "Sign Up"}
            </button>

            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default SignUpForm;
