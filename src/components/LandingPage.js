import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function LandingPage() {
  return (
    <>
      <Box className='video-wrapper'>
        <video src='/djmixing.mp4' autoPlay loop muted type='video/mp4'/>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <Typography variant='h2' sx={{ml: '50px'}}>
            A safe & inclusive event space
          </Typography>
          <Typography variant='h4' sx={{ml: '50px', mb: '50px', fontWeight: '200'}}>
            serving the Alameda community.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Grid container direction='row' justifyContent='space-evenly' alignItems='center' textAlign='center' sx={{height: '100vh', bgcolor: '#000000', color: 'white', paddingTop: '300px'}}>
          <Grid item xs={12} sx={{mb: '50px'}}>
            <Typography variant='h2'>
              A Blank Canvas
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{mb: '50px'}}>
            <Container>
              <Typography variant='h5' sx={{fontWeight: '300'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{ maxWidth: '350px' }}>
              <CardMedia
                component="img"
                alt="image of DJ playing music"
                height="350"
                image="/djing.jpeg"
              />
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{ maxWidth: '350px' }}>
                <CardMedia
                  component="img"
                  alt="image of 2 people settin up lights"
                  height="350"
                  image="/lighting.jpeg"
                />
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{ maxWidth: '350px' }}>
                <CardMedia
                  component="img"
                  alt="image of a projector"
                  height="350"
                  image="/projector.jpeg"
                />
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{ maxWidth: '350px' }}>
                <CardMedia
                  component="img"
                  alt="image of chairs"
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