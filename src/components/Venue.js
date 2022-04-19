import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import TableBarIcon from '@mui/icons-material/TableBar';
import SquareFootIcon from '@mui/icons-material/SquareFoot';

function Venue() {
  return (
    <>
      <Box sx={{mt: '200px', width: '100%', height: '75vh', backgroundImage: 'linear-gradient(0deg, #000, transparent), url(/venue1.jpg)', backgroundSize: 'cover', backgroundBlendMode: 'multiply', display: 'flex', alignItems: 'flex-end'}}>
        <Box sx={{height: '25vh'}}>
          <Typography variant='h3' sx={{ml: '50px', fontWeight: '600'}}>
            CUSTOMIZABLE SPACE
          </Typography>
          <Typography variant='h4' sx={{ml: '50px', fontWeight: '200'}}>
            to fit your event needs.
          </Typography>
        </Box>
      </Box>
      <Box sx={{height: '100vh', bgcolor: '#000000', display: 'flex', alignItems: 'center'}}>
        <Grid container direction='row' justifyContent='space-evenly' alignItems='center'>
          <Grid item xs={2}>
            <Card sx={{maxWidth: '350px', bgcolor: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
              <PeopleAltIcon color='secondary' fontSize='large' sx={{width: '100px', height: '100px'}}/>
              <br />
              <br />
              <Typography variant='h4' sx={{fontWeight: '400'}}>
                180 STANDING
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{maxWidth: '350px', bgcolor: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
              <EventSeatIcon color='secondary' fontSize='large' sx={{width: '100px', height: '100px'}}/>
              <br />
              <br />
              <Typography variant='h4' sx={{fontWeight: '400'}}>
                120 SITTING
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{maxWidth: '350px', bgcolor: '#000000', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
              <TableBarIcon color='secondary' fontSize='large' sx={{width: '100px', height: '100px'}}/>
              <br />
              <br />
              <Typography variant='h4' sx={{fontWeight: '400'}}>
                8 TABLES
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{maxWidth: '350px', bgcolor: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
              <SquareFootIcon color='secondary' fontSize='large' sx={{width: '100px', height: '100px'}}/>
              <br />
              <br />
              <Typography variant='h4' sx={{fontWeight: '400'}}>
                1000sf
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{height: '100vh', bgcolor: '#000000'}}>
        <Grid container direction='column' justifyContent='flex-start' alignItems='center'>
          <Grid item xs={12} sx={{mb: '50px'}}>
            <Typography variant='h2' sx={{fontWeight: '600'}}>
              SERVICES
            </Typography>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Venue