import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LandingPage() {
  return (
    <>
      <Box className='video-wrapper'>
        <video src='/djmixing.mp4' autoPlay loop muted type='video/mp4'/>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <Typography variant='h2' sx={{ml: '50px'}}>
            A safe & inclusive event space
          </Typography>
          <Typography variant='h4' sx={{ml: '50px', mb: '50px', fontWeight: '12'}}>
            serving the Alameda community.
          </Typography>
        </Box>
      </Box>
      <Box sx={{height: '100vh', bgcolor: '#000000'}}>
      </Box>
    </>
  )
}

export default LandingPage