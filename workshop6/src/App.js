import './App.css';
import {Routes, React, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import UniversityResults from './pages/universities/UniversityResults';
import { routes } from './constants/routes';
import Details from './pages/details/Details';
import Error from './pages/error/Error'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path={routes.universitiesList} element={<UniversityResults />} />
          <Route path={routes.details} Component={Details}/>
          <Route path={routes.notFound} Component={Error}/>
        </Routes>
    </div>
  );
}

export default App;
