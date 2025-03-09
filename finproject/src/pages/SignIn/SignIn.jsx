import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';
import routes from '../../constants/routes';
import SignInForm from '../../components/SignInForm/SignInForm';

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useAuthContext();


  React.useEffect(() => {
    if (state.isAuthenticated) {
      navigate(routes.produts);
    }
  }, [state.isAuthenticated, navigate]);

  return (
    <div className='sign-container'>
      <h1 className='sign-title'>SIGN IN</h1>
      {location.state?.success && <h1>Congratulations</h1>}
      <SignInForm />
    </div>
  );
};

export default SignIn;
