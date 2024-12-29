import React, { use, useState } from 'react'

function WeatherDashboard() {
    const mockWeatherData = {
        "New York": {
            temperature: "22°C",
            humidity: "56%",
            windSpeed: "15 km/h",
        },
        "Los Angeles": {
            temperature: "27°C",
            humidity: "45%",
            windSpeed: "10 km/h",
        },
        "London": {
            temperature: "15°C",
            humidity: "70%",
            windSpeed: "20 km/h",
        },
    }
    const [currWeather,setCurrWeather]=useState(mockWeatherData['New York']);
    const [city,setCity]=useState("");
    const [citynotfound,setCityNotFound]=useState(false);
    const [previousSearches,setPreviousSearches]=useState([]);
    const handleCitySearch=()=>{
        if(mockWeatherData[city])
        {
            setCurrWeather(mockWeatherData[city])
            setCityNotFound(false);
            
        }
       else{
        setCityNotFound(true);
       }
       
        setPreviousSearches([...previousSearches,city])
    }
  return (
    <div>
        { currWeather &&
        <ul>
            <li>{currWeather.temperature}</li>
            <li>{currWeather.humidity}</li>
            <li>{currWeather.windSpeed}</li>
        </ul>
}
{
   
}
        <input type='text'   onChange={(e)=>setCity(e.target.value)}/>
        {citynotfound && <p>City not found</p>}
        <button onClick={handleCitySearch}>
            search
        </button>
        {previousSearches && 
        previousSearches.map((item)=>(
            <button onClick={()=>{
                setCurrWeather(mockWeatherData[item])
            }}>{item}</button>
        ))
        }
    </div>
  )
}

export default WeatherDashboard