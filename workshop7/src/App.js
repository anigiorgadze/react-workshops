import './App.css';
import Posts from './pages/posts/Posts';
import Form from './components/Form';
import { useState } from 'react';


function App() {
  const [isUserValid, setIsUserValid] = useState(false);

  const validUser = (isAuthenticated) => {
    setIsUserValid(isAuthenticated);  // მომხმარებლის ვალიდაცია
  };

  return (
    <div className="App">
      {isUserValid ? (
        <Posts />

      ) : (
        <Form onAuthenticate={validUser}/>
      )}

    </div>
  );
}

export default App;
