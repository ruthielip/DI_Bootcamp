import {useState} from 'react';
import WeatherDisplay from './WeatherDisplay';


const Main = () => {
  const [cityText, setCityText] = useState('');
  const [countryText, setCountryText] = useState('');
  const [weather, setWeather] = useState('')

  const getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityText},${countryText}&appid=${key}`)
    .then(res=>res.json())
    .then(data=>{
      setWeather(data)
    })
    .catch(err=>console.log(err))
  }
  console.log(weather)
  return(
    <div className='main'>
      <h1>Weather Finder</h1>
      <p className='desc'>Find out temperature, conditions and more...</p>
      <div className='display'>
         <input type='text' placeholder='City...' onChange={(e)=>setCityText(e.target.value)}/>
         <input type='text' placeholder='Country...' onChange={(e)=>setCountryText(e.target.value)}/>
         <button onClick={getWeather}>Get Weather</button>
         <WeatherDisplay display={weather}></WeatherDisplay>
      </div>
    </div>
  )
}

export default Main;
