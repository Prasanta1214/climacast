import React from 'react'
import '../css/Hourly.css'

function Hourly({weather,temp}) {
  return (
    <>{temp &&
      <>
      <div className="bg-dark-subtle h-screen w-full flex justify-content-center">
        <div className='h-96 w-3/4 bg-white  ' >
          <div className='flex justify-around '>
            <div className='flex align-items-center justify-content-center  gap-x-2 w-1/2 flex-wrap'>
              <h6>{weather?.forecast?.forecastday[0]?.hour[7]?.time.slice(-5)}</h6>
              <img src={weather?.forecast?.forecastday[0]?.hour[7]?.condition?.icon} width="60px" />
              <h1>{weather?.forecast?.forecastday[0]?.hour[7]?.temp_c}°</h1>
            </div>
            <div className='flex align-items-center  justify-content-center w-1/2 flex-wrap text-xl '>
              <p className='fw-lighter'>RealFeel {weather?.forecast?.forecastday[0]?.hour[7]?.feelslike_c} / </p>
              <p className='flex font-bold'><img src="water.png" width="35px" />{weather?.forecast?.forecastday[0]?.hour[7]?.chance_of_rain}%</p>
            </div>
          </div>
            <p className='text-xl w-1/2 flex justify-around'>{weather?.forecast?.forecastday[0]?.hour[7]?.condition?.text}</p>
          <div className=''>
            <div className='w-1/2 '>
              <p className='flex text-center justify-around'>Wind <p>{weather?.forecast?.forecastday[0]?.hour[7]?.wind_dir}
                 {weather?.forecast?.forecastday[0]?.hour[7]?.wind_kph} km/h</p></p>
              <hr />
            </div>
            <div className=''>

            </div>

          </div>
         
        </div>
      </div>
      </>
      }
    </>
  )
}

export default Hourly
