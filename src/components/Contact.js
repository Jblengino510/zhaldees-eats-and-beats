import { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
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
      <Box sx={{bgcolor: '#1b1b1b', height: '30vh'}}>
        <Grid container direciton='column' justifyContent='center' alignItems='center' textAlign='center'>
          <Grid item xs={12} sx={{mt: '100px'}}>
              <Container>
                <Typography variant='h3' sx={{fontWeight: '600', fontSize: { xs: '1rem', sm: '1.5rem', md: '2.55rem', lg: '3rem' }}}>
                  HOW IT WORKS
                </Typography>
                <br />
                <br />
                <Typography variant='h5' sx={{fontWeight: '300', fontSize: { xs: '1rem', sm: '1.5rem'} }}>
                  Please inquire for available time slots.  After submitting your inquiry, we will reach out with next steps to schedule an onsite visit and discuss configurations.
                </Typography>
              </Container>
            </Grid>
        </Grid>
      </Box>
      <Box sx={{bgcolor: '#1b1b1b', height: '100vh'}}>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid item xs={12} lg={6} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{margin: '100px auto', width: { xs: '70%', lg: '500px', xl: '600px' }, height: '400px'}}>
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
          <Grid item xs={12} lg={6} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{margin: { xs: '100px', lg: '100px auto'}, width: '100%'}}>
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{display: { xs: 'block', lg: 'none' }, height: { xs: '100vh', md: '50vh' }, bgcolor: '#1b1b1b'}}></Box>
    </>
  )
}

export default Contact