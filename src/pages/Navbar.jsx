import React, { useState } from 'react'


function Navbar() {
  const [city ,setCity] = useState('')


  const searchWeather =()=>{
    fetch('http://api.weatherapi.com/v1/forecast.json?key=1f51f558dee1438a82450109252105&q=hyderabad')
    .then(response=>response.json())
    .then(data=>console.log(data))
  }

  return (
    <>
   <div className='overscroll-none'>
    <nav className="navbar bg-body-tertiary">
     <div className="container-fluid ">
       <a className="navbar-brand flex fw-semibold fs-1 column-gap-2"><img src="logo.jpeg" width="50px" />ClimaCast</a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" value={city} type="search" placeholder="Enter your city" onChange={(event)=>{setCity(event.target.value)}} aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit" onClick={searchWeather}>Search</button>
        </form>
     </div>
    </nav>
     
   </div>
    
   
    </>
  )
}

export default Navbar
