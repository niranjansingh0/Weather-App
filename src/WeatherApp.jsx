import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp(){
    const[weatherInfo, setWeatherInfo]=useState({
        city:"Deoria",
        feelsLike: 42.17,
        temp: 35.79,
        tempMin: 35.79,
        tempMax: 35.79,
        humidity: 49,
        weather: "few clouds",
    });

    let updateInfo=(newInfo)=>{
         setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Niranjan</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
};