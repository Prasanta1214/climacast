import React from 'react'
import { useState } from 'react'

function Navbar1({searchWeather,weather}) {
     const [city ,setCity] = useState('')
    
   

  const handleSearch = () => {
    if (city.trim()) {
      searchWeather(city);
      setCity('');
    }
    
    
  };
    
     
  return (
    <>
       <div className='overscroll-none fixed-top'>
        <nav className="navbar bg-body-tertiary">
         <div className="container-fluid ">
            <div className='flex  '>
              <div className="navbar-brand flex fw-semibold fs-1 column-gap-2 align-items-center "><img src="logo.jpeg" width="50px" />ClimaCast</div>
              <div className='py-4 text-2xl font-semibold flex column-gap-2 align-items-end'>{weather?.current?.temp_c}°C<div className='text-sm '>{weather?.location?.name}</div></div>
            </div>
            <div className="d-flex">
              <input className="form-control me-2" value={city} type="search" placeholder="Enter your city" onChange={(event)=>{setCity(event.target.value)}} aria-label="Search"/>
              <button className="btn btn-outline-success" onClick={handleSearch}>Search</button>
            </div>
         </div>
        </nav>
         
       </div>
        
      
    </>
  )
}

export default Navbar1
