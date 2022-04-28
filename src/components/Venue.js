import React from 'react'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import TableBarIcon from '@mui/icons-material/TableBar';
import SquareFootIcon from '@mui/icons-material/SquareFoot';

function Venue() {
  const navigate = useNavigate()


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
      <Box>
        <Grid container>
          <Grid item xs={12} sx={{height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#000000'}}>
            <Typography variant='h2' sx={{fontWeight: '600'}}>
              SERVICES
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{height: '50vh'}}>
        <Grid container sx={{bgcolor: '#000000'}}>
          <Grid item xs={6}>
            <Box sx={{backgroundImage: 'url(/mic-mixer.jpeg)', backgroundSize: 'cover', height: '50vh', margin: 'auto 100px'}}>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: 'auto 100px'}}>
              <Typography variant='h4'>
                Audio Visual Solutions
              </Typography>
              <br />
              <Typography variant='h5' sx={{fontWeight: '300'}}>
                Our experienced audio visual technicians will guide you through the technical ins and outs of our services to ensure a seamless experience.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{height: '25vh', bgcolor: '#000000'}}></Box>
      <Box sx={{height: '50vh'}}>
        <Grid container sx={{bgcolor: '#000000'}}>
          <Grid item xs={6}>
            <Box sx={{height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: 'auto 100px'}}>
              <Typography variant='h4'>
                DJ / Emcee
              </Typography>
              <br />
              <Typography variant='h5' sx={{fontWeight: '300'}}>
                With over 40 years of combined experience, our blend of veteran and junior level DJs will help make your occasion memorable.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{backgroundImage: 'url(/turntables.jpeg)', backgroundSize: 'cover', height: '50vh', margin: 'auto 100px'}}>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{height: '25vh', bgcolor: '#000000'}}></Box>
      <Box sx={{height: '50vh'}}>
        <Grid container sx={{bgcolor: '#000000'}}>
          <Grid item xs={6}>
            <Box sx={{backgroundImage: 'url(/lighting-equipment.jpeg)', backgroundSize: 'cover', height: '50vh', margin: 'auto 100px'}}>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: 'auto 100px'}}>
              <Typography variant='h4'>
                Lighting
              </Typography>
              <br />
              <Typography variant='h5' sx={{fontWeight: '300'}}>
                Industry standard uplighting, dance lights, projectors, and creative staging that will bring your event to life.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{height: '25vh', bgcolor: '#000000'}}></Box>
      <Box sx={{height: '50vh'}}>
        <Grid container sx={{bgcolor: '#000000'}}>
          <Grid item xs={6}>
            <Box sx={{height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: 'auto 100px'}}>
              <Typography variant='h4'>
                High Speed Internet
              </Typography>
              <br />
              <Typography variant='h5' sx={{fontWeight: '300'}}>
                WiFi available for all guests.
              </Typography>
              <Typography variant='h5' sx={{fontWeight: '300'}}>
                (Up to 1000 mbps of bandwidth)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{backgroundImage: 'url(/wifi.jpeg)', backgroundSize: 'cover', height: '50vh', margin: 'auto 100px'}}>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{height: '25vh', bgcolor: '#000000'}}></Box>
      <Box sx={{height: '50vh', bgcolor: '#1B1B1B', display: 'flex', alignItems: 'center'}}>
        <Grid container direction='row' justifyContent='space-evenly' alignItems='center'>
          <Grid item xs={2}>
            <Card sx={{maxWidth: '350px', bgcolor: '#1B1B1B', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 'none'}}>
              <PeopleAltIcon color='secondary' fontSize='large' sx={{width: '100px', height: '100px'}}/>
              <br />
              <br />
              <Typography variant='h4' sx={{fontWeight: '400'}}>
                180 STANDING
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{maxWidth: '350px', bgcolor: '#1B1B1B', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 'none'}}>
              <EventSeatIcon color='secondary' fontSize='large' sx={{width: '100px', height: '100px'}}/>
              <br />
              <br />
              <Typography variant='h4' sx={{fontWeight: '400'}}>
                120 SITTING
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{maxWidth: '350px', bgcolor: '#1B1B1B', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', boxShadow: 'none'}}>
              <TableBarIcon color='secondary' fontSize='large' sx={{width: '100px', height: '100px'}}/>
              <br />
              <br />
              <Typography variant='h4' sx={{fontWeight: '400'}}>
                8 TABLES
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{maxWidth: '350px', bgcolor: '#1B1B1B', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 'none'}}>
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
      <Box sx={{height: '70vh', backgroundImage: 'url(/artgallery.jpeg)', backgroundSize: 'cover', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
        <Typography variant='h4' sx={{fontWeight: '600'}}>
          LET US HELP WITH YOUR NEXT EVENT
        </Typography>
        <br />
        <br />
        <Button variant='outlined' size='large'sx={{border: '2px solid #FFFFFF', borderRadius: '0px', width: '15%', bgcolor: 'transparent', color: 'white', paddingTop: '20px', paddingBottom: '20px', '&:hover': { border: '3px solid white'}}} onClick={() => navigate('/contact')}>
          <strong>Contact</strong>
        </Button>
      </Box>
    </>
  )
}

export default Venue