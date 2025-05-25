import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar1 from "../src/pages/Navbar1"
import Home from "../src/pages/Home"
import Hourly from './pages/Hourly';
import Daily from './pages/Daily';
import Today from './pages/Today';
import { useState,useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

function App() {

   const [weather,setWeather]=useState([])
   const[temp ,setTemp]=useState(false)
   const searchWeather =(city)=>{
        const url='http://api.weatherapi.com/v1/forecast.json'
        const key = '1f51f558dee1438a82450109252105'

        fetch(`${url}?key=${key}&q=${city}`)
        .then(response=>response.json())
        .then(data=>{
          console.log(data)
          setWeather(data)
          setTemp(true)
        })
}
useEffect(()=>{
    const url='http://api.weatherapi.com/v1/forecast.json'
        const key = '1f51f558dee1438a82450109252105'

        fetch(`${url}?key=${key}&q=surat`)
        .then(response=>response.json())
        .then(data=>{
          console.log(data)
          setWeather(data)
          setTemp(true)
        })
  },[])

  return (
    <>
      <BrowserRouter>
       <Navbar1 searchWeather={searchWeather} weather={weather} />
       <Home></Home>
      <Routes>
   
        <Route path='/' element={<Today searchWeather={searchWeather} weather={weather} temp={temp}/>}></Route>
        <Route path='/hourly' element={<Hourly/>}></Route>
        <Route path='/daily' element={<Daily/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
