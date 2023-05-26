import React, { useState, useEffect } from 'react'
import axios from 'axios';


const WeatherApp = () => {
    const [inputValue, setInputValue] = useState("delhi");    
    const [weatherData, setWeatherData] = useState("");    
    
    useEffect(()=>{
        const apiKey = "a017d2be11bacc6a61797da4d4eb2db3";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
        axios.get(apiUrl)
        .then((response) =>{
          console.log(response.data);
          setWeatherData(response.data);
        })
        .catch((error) =>{
          console.log(error)
        })
    }, [inputValue])


    return (
   <>
    <div className="container">
        <input type='text' className='input-data' placeholder='Enter City Name' onChange={((e)=> {setInputValue(e.target.value)})} />
        {!weatherData ? (
            <p className='error'>No Data Found</p>
        ) : (
            <div className="main">
          <div className="temp">
            <p className='temprature'>{`${Math.ceil(weatherData.main.temp)}°`}</p>
            <p className='weather'>{weatherData.weather[0].main}</p>
            <div className="humidity-wind">
                <div className="humidity">
                    <h4>Humidity</h4>
                    <p>{`${weatherData.main.humidity} %`}</p>
                </div>
                <div className="wind">
                    <h4>Wind</h4>
                    <p>{`${Math.ceil(weatherData.wind.speed)} K/M`}</p>
                </div>
            </div>
          </div>
          <div className="city-name">
            <h3>{`${weatherData.name}`}</h3>
          </div>
        </div>
        )}
        
    </div>
   </>
  )
}


export default WeatherApp