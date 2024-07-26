import React from 'react'
import weathercloudy from '../assets/weather-cloudy.png'

const Weathercard = ({weatherdetails})=> {  
  console.log(weatherdetails);
  return (
    
    <div className="weather-section">
      <div className="weather-card">
        <div className="weather-temp-c">
          {weatherdetails.current.temp_c}<sup>o</sup>
        </div>
        <div className="weather-info">
          <span>
            {weatherdetails.current.humidity}
          </span>
          <span>
            {weatherdetails.current.cloud}
          </span>
        </div>
        <div className="weather-place">
          {weatherdetails.location.name}, {weatherdetails.location.region}, {weatherdetails.location.country}
        </div>
        <div className="weather-avatar">
          <img src={weathercloudy} alt="" />
        </div>
      </div>
    </div>
 
  )
}

export default Weathercard
