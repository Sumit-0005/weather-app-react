import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(null);

    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6c7e96dd68e3be5422cd30e67e932c15";

    let getWeatherInfo = async (city) => {
        try{
        let url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        let result = {
            cityName : data.name,
            temp : data.main.temp,
            humidity : data.main.humidity,
            pressure : data.main.pressure,
            feelsLike : data.main.feels_like,
            weatherType : data.weather[0].main,
        }
        return result;
        }catch(err){
            setError("Failed to fetch weather data");
            console.error(err);
        }
    }

    let handleChange = (e) => {
        setCity(e.target.value);
    }   

    let handleSubmit = async (e) => {
        try{
        e.preventDefault();
        console.log("Form submitted with city: ", city);
        setCity("");
        let newInfo = await getWeatherInfo(city);
        updateInfo(newInfo);
        }catch(err){
            setError("Failed to fetch weather data");
            console.error(err);
        }       
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <TextField 
            id="city" label="City Name" 
            variant="outlined" required 
            value={city} onChange={handleChange}
            />
            <br></br>
            <br></br>
            <Button variant="contained" type="submit" 
            style={{marginLeft: '10px'}}>Search</Button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    );
}