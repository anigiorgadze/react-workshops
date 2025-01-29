import React, { useState } from 'react'


function Cards({ props }) {
  const [visibleUsers, setVisibleUsers] = useState(props.slice(0, 5));
  const [show, setShow] = useState('Show more')

  const handleClick = () => {
    if (show === "Show more") {
      setVisibleUsers(props.slice(0, 10));
      setShow("Show less");
    } else {
      setVisibleUsers(props.slice(0, 5));
      setShow("Show more");
    }
  };

  return (
    <div className='container'>

      <div className='card-container'>

        {visibleUsers.map((user, i) => (
          <div className='user-item' key={i}>
            
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
            <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
            <p>Age: <span>{user.dob.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <p>Phone: <span>{user.phone}</span></p>
            <p>Location: <span>{user.location.city}, {user.location.country}</span></p>

          </div>
        ))}
      </div>

      <button className='show-btn' onClick={handleClick}>{show}</button>
    </div>
  );
};

export default Cards
