import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar1 from "../src/pages/Navbar1";
import Home from "../src/pages/Home";
import Hourly from './pages/Hourly';
import Daily from './pages/Daily';
import Today from './pages/Today';
import 'leaflet/dist/leaflet.css';

function App() {
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState(false);
  const [locationError, setLocationError] = useState(null);

  const searchWeather = (cityOrCoords) => {
    const url = 'https://api.weatherapi.com/v1/forecast.json';
    const key = '1f51f558dee1438a82450109252105';
    const query = typeof cityOrCoords === 'string' ? cityOrCoords : `${cityOrCoords.lat},${cityOrCoords.lon}`;

    fetch(`${url}?key=${key}&q=${query}&days=3`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setWeather(data);
        setTemp(true);
      })
      .catch(err => console.error("Weather fetch error:", err));
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          searchWeather(coords); // Fetch weather using coordinates
        },
        (error) => {
          console.error("Location error:", error);
          setLocationError("Unable to fetch your location. Showing default city (Surat).");
          searchWeather('Surat'); // Fallback to Surat
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
      searchWeather('Surat');
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar1 searchWeather={searchWeather} weather={weather} />
        <Home />
        {locationError && (
          <div style={{ padding: "1rem", color: "red", textAlign: "center" }}>
            {locationError}
          </div>
        )}
        <Routes>
          <Route path='/' element={<Today searchWeather={searchWeather} weather={weather} temp={temp} />} />
          <Route path='/hourly' element={<Hourly searchWeather={searchWeather} weather={weather} temp={temp} />} />
          <Route path='/daily' element={<Daily />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
