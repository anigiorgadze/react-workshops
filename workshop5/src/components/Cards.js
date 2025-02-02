import React from 'react'

function Cards({ userData, handleCounter, handleFilterChange, filters }) {
  console.log(userData)

  return (
    <div className='container'>
      <form>
        <input type='checkbox' id='email' name='showEmail' checked={filters.showEmail} onChange={handleFilterChange}></input>
        <label htmlFor='email'>Email</label> <br />

        <input type='checkbox' id='phone' name="showPhone" checked={filters.showPhone} onChange={handleFilterChange}></input>
        <label htmlFor='phone'>Phone</label> <br />

        <input type='checkbox' id='location' name="showLocation" checked={filters.showLocation} onChange={handleFilterChange}></input>
        <label htmlFor='location'>Location</label>
      </form>


      <div className='card-container'>
        {userData.map((user) => (
          <div className='user-item' key={user.id.value}>
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
            <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>


            {filters.showEmail && (
              <p><strong>Email:</strong> {user.email}</p>
            )}


            {filters.showPhone && (
              <p><strong>Phone:</strong> {user.phone}</p>
            )}


            {filters.showLocation && (
              <p><strong>Location:</strong> {`${user.location.country}`}</p>
            )}

          </div>
        ))}
      </div>

      <button onClick={handleCounter} className='show-btn'>Show more</button>
    </div>
  );
};

export default Cards
