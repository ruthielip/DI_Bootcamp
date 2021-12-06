import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function App() {
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map){
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map){
    setMap(null)
  }, [])

  return (
    <>
    <h1 className='title'>GOOGLE MAPS</h1>
    <div className='map'>
    <GoogleMap
       mapContainerStyle={{width:'1200px', height:'600px'}}
       center={{lat:32.0853, lng: 34.7818}}
       zoom={10}
       onLoad={onLoad}
       onUnmount={onUnmount}>
    </GoogleMap>
    </div>
    </>
  )
}

export default React.memo(App);
