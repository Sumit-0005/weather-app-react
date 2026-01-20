import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
            cityName : "Delhi",
            temp : 25,
            humidity : 60,
            pressure : 1013,
            feelsLike : 27,
            weatherType : "Clear",
        });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{ textAlign: "center" }}>
            <h1>Weather app</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox {...weatherInfo} />
        </div>
    );
}