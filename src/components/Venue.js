import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Venue() {
  return (
    <>
      <Box sx={{mt: '200px', width: '100%', height: '75vh', backgroundImage: 'linear-gradient(0deg, #000, transparent), url(/venue1.jpg)', backgroundSize: 'cover', backgroundBlendMode: 'multiply', display: 'flex', alignItems: 'flex-end'}}>
        <Box sx={{height: '25vh'}}>
          <Typography variant='h3' sx={{ml: '50px'}}>
            CUSTOMIZABLE SPACE
          </Typography>
          <Typography variant='h4' sx={{ml: '50px', fontWeight: '200'}}>
            to fit your event needs.
          </Typography>
        </Box>
      </Box>
      <Box sx={{height: '100vh', bgcolor: '#000000'}}></Box>
    </>
  )
}

export default Venue