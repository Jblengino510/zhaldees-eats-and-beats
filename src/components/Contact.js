import { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ContactForm from './ContactForm';

function Contact() {
  const [ viewport, setViewport ] = useState({
    latitude: 37.7738740,
    longitude: -122.2770636,
    zoom: 14,
    width: '100%',
    height: '100%'
  })



  return (
    <>
      <Box sx={{mt: '200px', bgcolor: '#1b1b1b', height: '100vh'}}>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid item xs={6} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{margin: '100px 0px', width: '100%', height: '400px', width: '600px'}}>
                <ReactMapGL 
                  {...viewport}
                  mapStyle="mapbox://styles/jblengino/cl17jav1h001z14lm4wlaimtk"
                  mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                  onMove={event => setViewport(event.viewState)}
                >
                  <Marker longitude={-122.2770636} latitude={37.7738740} color="red"/>
                </ReactMapGL>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{margin: '100px 0px', width: '100%'}}>
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Contact