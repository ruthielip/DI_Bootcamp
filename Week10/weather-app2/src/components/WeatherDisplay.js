import '../App.css'

const WeatherDisplay = (props) => {
  const {display} = props;
  console.log(display)

  if(display===''){
    return(
      <></>
    )
  } else {
    return(
      <div className='weather'>
         <p><span className='label'>Loaction:</span> {display.name}, {display.sys.country}</p>
         <p><span className='label'>Temperature:</span> {display.main.temp}</p>
         <p><span className='label'>Humidity:</span> {display.main.humidity}</p>
         <p><span className='label'>Condition:</span> {display.weather[0].description}</p>
      </div>
    )
  }

}

export default WeatherDisplay;
