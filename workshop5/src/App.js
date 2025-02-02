import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import {BounceLoader } from 'react-spinners'
import Forms from './components/Forms';


function App() {
  const [num,setNum] =useState(5)
  const [userData, setUserData] = useState([])
  const [error, setError] = useState('')
  const [isloading, setIsLoading] = useState(false)
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState(null)

  const rightEmail = 'digitalAcademy@gmail.com'
  const rightPassword = 'iLoveReact123'

  const [filters, setFilters] = useState({
    showEmail:false,
    showPhone:false,
    showLocation:false
  })
  
  const handleCounter = () => {
    setNum((prev) => prev + 1); 
    
  }
  

  useEffect(()=>{
    setIsLoading(true)
      fetch(`https://randomuser.me/api/?results=50`)
      .then((response) =>{
          if(response.ok){
              return response.json();
          }
          throw new Error('Fetch error')
      })
      .then((data)=> {
        setAllUsers(data.results);
        setUserData(data.results.slice(0, num))})
      .catch((error)=> setError(error.message))
      .finally(()=>{setIsLoading(false)})
  },[])

  useEffect(() => {
    if (allUsers.length) {
      setUserData(allUsers.slice(0, num));
    }
  }, [num, allUsers]); 

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleLogin = (userData) => {
    setUser(userData); 
  };


  return (
    <div className="App">
      {isloading && <BounceLoader color="#daa520" />}
      <Forms onLogin={handleLogin}/>

      {user && user.Email === rightEmail && user.password === rightPassword ? (
        <Cards userData={userData} handleCounter={handleCounter} filters={filters}
        handleFilterChange={handleFilterChange}  />
      ) : (
        user && <p style={{ color: "red" }}>Invalid email or password</p>
      )}
    


      <p>{error}</p>
    </div>
  );
}

export default App;
