import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';
import routes from '../../constants/routes';
import { authHandler } from '../../api/auth';
import authAction from '../../constants/authAction';

const SignInForm = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const [userInfo, setUserInfo] = useState({ userName: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);



    try {
      const response = await authHandler(authAction.signIn, userInfo);

      if (!response || !response.token) {
        throw new Error("Invalid response from server: Token is missing.");
      }

      const { token, user } = response;

      // **Token-ის შენახვა Local Storage-ში**
      localStorage.setItem("accessToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("🔄 Dispatching LOGIN action...");
      dispatch({ type: "LOG_IN", payload: { token, user } });


      setTimeout(() => {

      }, 1000);

      navigate(routes.produts);
    } catch (error) {

      setError(error.message || "Authentication failed. Please try again.");
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

      <label>Password:</label>
      <input
        type="password"
        placeholder='Password'
        name='password'
        value={userInfo.password}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
      />

      <button type='submit' disabled={isLoading}>
        {isLoading ? "Signing In..." : "Sign In"}
      </button>

      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default SignInForm;
