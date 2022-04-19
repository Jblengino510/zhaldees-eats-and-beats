import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function About() {
  return (
    <>
      <Box sx={{mt: '200px', width: '100%', height: '100vh', bgcolor: '#000000'}}>
        <Grid container direction='column' justifyContent='center' alignItems='center' textAlign='center'>
          <Grid item xs={12} sx={{mt: '100px'}}>
            <Container>
                <Typography variant='h3' sx={{fontWeight: '600'}}>
                  MEET OUR TEAM
                </Typography>
                <br />
                <br />
                <Typography variant='h5' sx={{fontWeight: '300'}}>
                  Our mission...
                </Typography>
              </Container>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Box>
    </>
  )
}

export default About