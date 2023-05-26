import React from 'react'
import moment from 'moment';
import logoWeather from '../Images/logoWeather.png';

const Header = () => {
  return (
    <>
    <nav>
        <div className="logo">
            <img  className="img" src={logoWeather} alt='logo' />
            <h1>Weather App</h1>
        </div>
        <div className="date">
        <h3>{moment().format("dddd, Do MMMM")}</h3>
        </div>
    </nav>



    </>
  )
}

export default Header