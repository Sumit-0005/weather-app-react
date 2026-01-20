export default function InfoBox(props){
    return(
        <div >
            <h3>City Name: {props.cityName}</h3>
            <p>Temperature: {props.temp} °C</p>
            <p>Humidity: {props.humidity} %</p>
            <p>Pressure: {props.pressure} hPa</p>
            <p>Feels Like: {props.feelsLike} °C</p>
            <p>Weather Type: {props.weatherType}</p>
        </div>
    );
}