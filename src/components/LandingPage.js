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
          <Typography variant='h3' sx={{ml: '50px', fontWeight: '600'}}>
            A SAFE & INCLUSIVE EVENT SPACE
          </Typography>
          <Typography variant='h4' sx={{ml: '50px', fontWeight: '200'}}>
            serving the Alameda community.
          </Typography>
        </motion.div>
      </Box>
      <Box sx={{height: '100vh', bgcolor: '#000000', paddingTop: '300px'}}>
        <Grid container direction='row' justifyContent='space-evenly' alignItems='center' textAlign='center'>
          <Grid item xs={12} sx={{mb: '50px'}}>
            <Typography variant='h2' sx={{fontWeight: '600'}}>
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
          <Grid item xs={2}>
            <Card sx={{ maxWidth: '350px' }}>
              <CardMedia
                component="img"
                alt="Image of DJ playing music"
                height="350"
                image="/djing.jpeg"
              />
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{ maxWidth: '350px' }}>
                <CardMedia
                  component="img"
                  alt="Image of 2 people setting up lights"
                  height="350"
                  image="/lighting.jpeg"
                />
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{ maxWidth: '350px' }}>
                <CardMedia
                  component="img"
                  alt="Image of a projector"
                  height="350"
                  image="/projector.jpeg"
                />
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{ maxWidth: '350px' }}>
                <CardMedia
                  component="img"
                  alt="Image of chairs"
                  height="350"
                  image="/chairs.jpeg"
                />
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container direction='row' justifyContent='center' alignItems='center' textAlign='center' sx={{height: '50vh', bgcolor:'#000000'}}>
          <Grid item xs={12}></Grid>
        </Grid>
      </Box>
    </>
  )
}

export default LandingPage