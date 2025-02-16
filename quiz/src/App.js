import { useState } from 'react';
import './App.css';
import Products from './pages/Products';
import Form from './components/Form';
import RegistrationForm from './components/RegistrationForm ';

function App() {
  const [isUserValid, setIsUserValid] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); 

  const validUser = (isAuthenticated) => {
    setIsUserValid(isAuthenticated);  // მომხმარებლის ვალიდაცია
  };

  const handleRegister = () => {
    setIsRegistered(true);  // რეგისტრაციის დასრულების შემდეგ შეცვლით სტატუსს
  };


  return (
    <>
    {/* თუ მომხმარებელი რეგისტრირებულია, გადავიყვანთ ლოგინზე, ხოლო თუ არა, რეგისტრაციის ფორმას გამოვიტანთ */}
    {!isRegistered ? (
      <RegistrationForm handleRegister={handleRegister} />
    ) : (
      <>
        {/* თუ მომხმარებელი უკვე დარეგისტრირებულია, შეხედავს შესვლის ფორმას */}
        {!isUserValid ? (
          <Form onAuthenticate={validUser} />
        ) : (
          <Products />
        )}
      </>
    )}
  </>
  );
}

export default App;
