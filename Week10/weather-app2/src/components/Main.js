import {useState} from 'react';
import WeatherDisplay from './WeatherDisplay';

const Main = () => {
  const [cityText, setCityText] = useState('');
  const [countryText, setCountryText] = useState('');
  const [weather, setWeather] = useState('')

  const getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityText},${countryText}&appid=c26c2c63db865467c1cab559f63e31da`)
    .then(res=>res.json())
    .then(data=>{
      setWeather(data)
    })
    .catch(err=>console.log(err))
  }
  console.log(weather)
  return(
    <div className='main'>

      <div className='display'>
      <div className='title'>
        <div className='header'>
          <h1>Weather Finder</h1>
          <i class="fas fa-meteor"></i>
        </div>
        <div className='form'>
           <input type='text' placeholder='City...' onChange={(e)=>setCityText(e.target.value)}/><br/>
           <input type='text' placeholder='Country...' onChange={(e)=>setCountryText(e.target.value)}/><br/>
           <button onClick={getWeather}>Get Weather</button>
        </div>
      </div>
         <WeatherDisplay display={weather}></WeatherDisplay>
      </div>
    </div>
  )
}

export default Main;
