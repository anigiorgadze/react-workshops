import React from 'react'
import PizzaAnimation from '../../animations/PizzaAnimation';
import { useNavigate } from 'react-router-dom';
import routes from '../../constants/routes';


const Home = () => {
  const navigate = useNavigate()


  return (
    <div className="home-container">
      <PizzaAnimation />
      <div className='home-intro'>
        <div className='paragraph'>
          <h3 className='home-title'>We’ve Got So Much More</h3>

          <p>Step into the world of flavors and pick your favorite pizza!
            Watch as delicious pizzas rotate before your eyes and choose the one that makes your mouth water!
          </p>
          <p>Explore the menu and find your perfect slice!</p>
          <h4>" Your Perfect Pizza Awaits You!"</h4>

        </div>

        <div className='btn-div'>
          <button onClick={() => navigate(routes.singIn)}>Sign In</button>
          <button onClick={() => navigate(routes.signUp)}>Sign Up</button>
        </div>
      </div>
    </div>
  );

}

export default Home
