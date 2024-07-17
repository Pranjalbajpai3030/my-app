import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import { debounce } from 'lodash';
import axios from 'axios';

const NavBar = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({ temp: '', icon: '' });

  const debouncedSearch = debounce((query) => setSearchQuery(query), 500);

  const handleSearch = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=48ceb3e2568f56c11d131ba71baaeeb9`
          );
          const { temp } = response.data.main;
          const { icon } = response.data.weather[0];
          setWeather({ temp, icon });
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ color: 'white' }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'white' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business" style={{ color: 'white' }}>Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment" style={{ color: 'white' }}>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general" style={{ color: 'white' }}>General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" style={{ color: 'white' }}>Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science" style={{ color: 'white' }}>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" style={{ color: 'white' }}>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology" style={{ color: 'white' }}>Technology</Link>
              </li>
            </ul>
            <div className="weather-widget">
              {weather.temp && (
                <div className="weather-info">
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt="weather icon"
                    style={{ width: '40px', height: '40px' }}
                  />
                  <span style={{ color: 'white', marginLeft: '10px' }}>{weather.temp}°C</span>
                </div>
              )}
            </div>
            <form className="d-flex" style={{ marginLeft: '20px' }}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={handleSearch}
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
