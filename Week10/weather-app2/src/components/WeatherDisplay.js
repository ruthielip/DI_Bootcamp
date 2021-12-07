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
         <p><span className='label'>Loaction:</span><br/> {display.name}, {display.sys.country}</p>
         <p><span className='label'>Temperature:</span><br/> {display.main.temp}</p>
         <p><span className='label'>Humidity:</span><br/> {display.main.humidity}</p>
         <p><span className='label'>Condition:</span><br/> {display.weather[0].description}</p>
      </div>
    )
  }

}

export default WeatherDisplay;
