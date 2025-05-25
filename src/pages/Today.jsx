import React from 'react'
import Navbar1 from './Navbar1'
import { useState,useEffect } from 'react';
import "../css/Today.css"


function Today({weather ,temp}) {

  const [time, setTime] = useState(new Date());
   const [showMap, setShowMap] = useState(false);



    useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);


  const position=[15.40,74.86]
 
  return (
    <>{temp &&
    <>
    <div className="bg-dark-subtle h-fit w-full d-flex justify-content-center align-items-center pt-px  flex-col gap-0 row-gap-3">
        
        <div className='h-fit w-2/3 bg-white flex flex-wrap flex-col rounded-xl' >
          <div className='flex  justify-content-between align-items-center px-2 '><p>CURRENT WEATHER</p>
            <p className='flex align-items-center'>{time.toLocaleTimeString()}</p>
          </div>
        <hr />
        <div className='flex align-items-center justify-content-evenly flex-wrap '>
          <div className='flex align-items-center px-8 '>
            <img src={weather?.current?.condition?.icon} width="100px" />
            <div className='flex flex-col align-items-center justify-content-center'>
              <div className='flex align-items-center justify-content-center'>
                <p className='text-6xl'>{weather?.current?.temp_c}</p>
                <p className='text-4xl pb-4'>°</p>
                <p className='text-5xl pt-5 pb-4'>C</p>
              </div>
              
            </div>
          </div>
         
            <div className='text-xl tracking-wide  '>
                <div className='flex  justify-center-safe '>RealFell Shade {weather?.current?.feelslike_c}°</div>
                <hr />
                <p className=' flex  justify-center-safe'>Wind {weather?.current?.wind_kph}</p><hr />
                <p className='flex  justify-center-safe'>Wind Gusts {weather?.current?.windchill_c}</p><hr />
                <p className='flex  justify-center-safe'>Direaction   {weather?.current?.wind_dir}</p>
            </div>
          
          </div>
        </div>
        
         <div className='h-fit w-2/3 bg-white rounded-xl '>
           <p className='flex align-items-center px-3'>TODAY CONDITION</p>
           <hr />
           <p className='text-xl px-3 flex align-items-center'>Today Weather is {weather?.current?.condition?.text}</p>
         
          </div>
          <div className='h-fit w-2/3 bg-white rounded-xl uppercase'>
            <p>{weather?.location?.name} Weather Radar</p>
            
            <div className='object-cover flex overflow-x-hidden cursor-pointer '>
              <img src="map.jpg" alt="" width="900px"/>
            </div>
          </div>

          <div className='h-fit w-2/3 bg-white rounded-xl uppercase'>
          <p>HOURLY WEATHER</p>
          <div className='hourly overflow-x-scroll gap-x-4 px-2'>
            {weather?.forecast?.forecastday[0]?.hour?.map((item,index)=>
            <div className="hourly-con flex flex-col justify-content-center align-items-center bg-light">
              <h4>{item.time.slice(-5)}</h4>
              <img src={item.condition?.icon} alt="" width="40px" />
              <h3>{item.temp_c}°</h3>
              <h6>{item.chance_of_rain}%</h6>
            </div>
            )}
          </div>

          </div>
      </div>
    </>}

    </>
  )
}

export default Today
