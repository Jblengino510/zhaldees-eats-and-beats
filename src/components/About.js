import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function About() {
  return (
    <>
      <Box sx={{width: '100%', height: '100vh', backgroundImage: 'url(/ZNB-2.jpeg)', backgroundSize: 'cover', backgroundBlendMode: 'multiply', display: 'flex', alignItems: 'flex-end'}}>
        <Box sx={{height: '50vh'}}>
          <Typography variant='h3' sx={{ml: '50px', fontWeight: '600', fontSize: { xs: '1.6rem', sm: '2rem', md: '2.55rem', lg: '3rem' }}}>
            Eats & Beats is Food.
          </Typography>
          <Typography variant='h3' sx={{ml: '50px', fontWeight: '600', fontSize: { xs: '1.6rem', sm: '2rem', md: '2.55rem', lg: '3rem' }}}>
            Eats & Beats is Music.
          </Typography>
          <Typography variant='h3' sx={{ml: '50px', fontWeight: '600', fontSize: { xs: '1.6rem', sm: '2rem', md: '2.55rem', lg: '3rem' }}}>
            Eats & Beats is an Event Space.
          </Typography>
        </Box>
      </Box>
      <Box sx={{width: '100%', height: '100vh', bgcolor: '#000000'}}>
        <Grid container direction='column' justifyContent='center' alignItems='center' textAlign='center'>
          <Grid item xs={12} sx={{mt: '200px'}}>
            <Container>
                <Typography variant='h5' sx={{fontWeight: '300', fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem'}}}>
                  We are event planners, audio/visual technicians, DJs, and chefs. We host corporate gatherings, private parties, weddings and art receptions. We provide you with the tools you need to help stream your creative content on digital platforms such as Twitch or YouTube. We offer the perfect place for your next pop-up food concept, or can supply catering when you’d rather let us do the cooking. We work closely with local non-profit organizations that help our community, and donate meals to families in need.
                </Typography>
                <br />
                <br />
                <Typography variant='h5' sx={{fontWeight: '300', fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem'}}}>
                  We are Zhaldee’s Eats & Beats — a full-service events and catering company supporting the community of Alameda and the greater Bay Area since 2017. Welcome to our home!
                </Typography>
                <br />
                <br />
                <Typography variant='h5' sx={{fontWeight: '300', fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem'}}}>
                  Our space is safe and inclusive; a blank canvas in which you are encouraged to be innovative and collaborative.
                  We are Zhaldee’s Eats & Beats — a full-service events and catering company supporting the community of Alameda and the greater Bay Area since 2017. Welcome to our home!
                </Typography>
              </Container>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{height: { xs: '50vh', lg: '25vh' }, bgcolor: '#000'}}></Box>
    </>
  )
}

export default About