import { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Contact() {
  const [ viewport, setViewport ] = useState({
    latitude: 37.7738740,
    longitude: -122.2770636,
    zoom: 10,
    width: '100%',
    height: '90vh'
  })


  return (
    <>
      <Box sx={{mt: '200px', height: '100vh'}}>
            <ReactMapGL 
              {...viewport}
              mapStyle="mapbox://styles/jblengino/cl17jav1h001z14lm4wlaimtk"
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            >
              <Marker longitude={viewport.longitude} latitude={viewport.latitude} color="red"/>
            </ReactMapGL>
      </Box>
    </>
  )
}

export default Contact