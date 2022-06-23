import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { motion } from 'framer-motion'

function LandingPage() {
  return (
    <>
      <Box className='video-wrapper'>
        <motion.video initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ delay: 1 }} src='/djmixing.mp4' autoPlay loop muted type='video/mp4'/>
        <motion.div initial={{ y: '100vh', opacit: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2 }} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '25vh'}}>
          <Typography variant='h3' sx={{ml: { xs: '25px', md: '50px' }, fontWeight: '600', fontSize: { xs: '1.6rem', sm: '2rem', md: '2.55rem', lg: '3rem' }}}>
            A SAFE & INCLUSIVE EVENT SPACE
          </Typography>
          <Typography variant='h4' sx={{ml: { xs: '25px', md: '50px' }, fontWeight: '200', fontSize: { xs: '1.6rem', md: '2rem' }}}>
            serving the Alameda community.
          </Typography>
        </motion.div>
      </Box>
      <Box sx={{height: '100vh', bgcolor: '#000000', paddingTop: '300px'}}>
        <Grid container alignItems='center' textAlign='center' sx={{flexDirection: { xs: 'column', md: 'row'}, justifyContent: { xs: 'center', md: 'space-evenly' }}}>
          <Grid item xs={12} sx={{mb: '50px'}}>
            <Typography variant='h2' sx={{fontWeight: '600', fontSize: { xs: '1.8rem', sm: '2rem', md: '2.55rem', lg: '4rem' }}}>
              A BLANK CANVAS
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{mb: '50px'}}>
            <Container>
              <Typography variant='h5' sx={{fontWeight: '300'}}>
                Whether it's a private party, corporate meeting, community gathering, art showcase, or whether you are a local DJ that needs the proper equipment to stream on Twitch, or an up and coming chef who needs space for a pop-up event, we will work with you to bring your vision to life.
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12} md={2}>
            <Card sx={{ maxWidth: { xs: '100%', md: '350px' }, margin: { xs: '3rem 6rem', md: 'auto' }}}>
              <CardMedia
                component="img"
                alt="Image of DJ playing music"
                image="/djing.jpeg"
                sx={{height: { xs: 'auto', md: '350px' }}}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={2}>
            <Card sx={{ maxWidth: { xs: '100%', md: '350px' }, margin: { xs: '3rem 6rem', md: 'auto' }}}>
                <CardMedia
                  component="img"
                  alt="Image of 2 people setting up lights"
                  image="/lighting.jpeg"
                  sx={{height: { xs: 'auto', md: '350px' }}}
                />
            </Card>
          </Grid>
          <Grid item xs={12} md={2}>
            <Card sx={{ maxWidth: { xs: '100%', md: '350px' }, margin: { xs: '3rem 6rem', md: 'auto' }}}>
                <CardMedia
                  component="img"
                  alt="Image of a projector"
                  image="/projector.jpeg"
                  sx={{height: { xs: 'auto', md: '350px'}}}
                />
            </Card>
          </Grid>
          <Grid item xs={12} md={2}>
            <Card sx={{ maxWidth: { xs: '100%', md: '350px' }, margin: { xs: '3rem 6rem', md: 'auto' }}}>
                <CardMedia
                  component="img"
                  alt="Image of chairs"
                  image="/chairs.jpeg"
                  sx={{height: { xs: 'auto', md: '350px' }}}
                />
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{height: { xs: '100vh', md: '50vh' }, bgcolor: '#000'}}></Box>
      <Box sx={{display: { xs: 'block', md: 'none' }, height: { xs: '100vh' }, bgcolor: '#000'}}></Box>
      <Box sx={{display: { xs: 'block', md: 'none' },height: { xs: '50vh' }, bgcolor: '#000'}}></Box>
    </>
  )
}

export default LandingPage