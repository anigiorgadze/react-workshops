import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Forms from './components/Forms';
import { users } from './constants/Users'



function App() {
  const rightEmail = 'digitalAcademy@gmail.com'
  const rightPassword = 'iLoveReact123'

  const [user, setUser] = useState(null)

  const handleLogin = (userData) => {
    setUser(userData);
  }

  return (

    <>
        <Forms onLogin={handleLogin} />
        {user && user.Email === rightEmail && user.password === rightPassword ? (
        <Cards props={users} />
      ) : (
        user && <p style={{ color: "red" }}>Invalid email or password</p>
      )}
    </>
  );
}

export default App;
