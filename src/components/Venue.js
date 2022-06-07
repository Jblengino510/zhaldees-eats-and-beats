import { useState, useEffect } from 'react'
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
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion'

function Venue() {
  const navigate = useNavigate()
  const [ index, setIndex ] = useState(0)
  const [ images, setImages ] = useState([
    {
      src: '/ZNB-1.jpeg',
      alt: '1'
    },
    {
      src: '/ZNB-2.jpeg',
      alt: '2'
    },
    {
      src: '/ZNB-3.jpeg',
      alt: '3'
    },
    {
      src: '/ZNB-4.jpeg',
      alt: '4'
    },
    {
      src: '/ZNB-5.jpeg',
      alt: '5'
    },
  ])


  function nextImage() {
    if (index !== images.length - 1) setIndex(index + 1)
  }

  function prevImage() {
    if (index > 0) setIndex(index - 1)
  }


  return (
    <>
      <Box className='carousel'>
        <motion.div initial={{ y: '100vh', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2 }} style={{backgroundColor: '', height: '70%', position: 'absolute', zIndex: '2', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
          <Typography variant='h3' sx={{ml: '50px', fontWeight: '600', fontSize: { xs: '1.6rem', sm: '2rem', md: '2.55rem', lg: '3rem'}}}>
            A SHOW ROOM & EVENT SPACE  
          </Typography>
          <Typography variant='h4' sx={{ml: '50px', fontWeight: '200', fontSize: { xs: '1.6rem', md: '2rem'}}}>
            to fit your event needs.
          </Typography>
        </motion.div>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%'}}>
          <IconButton className='carousel-button prev' aria-label='Arrow Backwards' color='secondary' size='large' onClick={prevImage} disabled={index === 0 ? true : false}>
            <ArrowBackIcon sx={{ fontSize: { xs: '3rem', sm: '3.5rem', md: '4rem', lg: '5rem'} }}/>
          </IconButton>
          <IconButton className='carousel-button next' aria-label='Arrow Forward' color='secondary' size='large' onClick={nextImage} disabled={index !== images.length - 1 ? false : true}>
            <ArrowForwardIcon sx={{ fontSize: { xs: '3rem', sm: '3.5rem', md: '4rem', lg: '5rem'} }}/>
          </IconButton>
        </Box>
        <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{ delay: 1 }} className='slide' data-active>
          {images.map(image => <img src={image.src} alt={image.alt} />)[index]}
        </motion.div>
      </Box>
      <Box sx={{height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#000000'}}>
        <Typography variant='h2' sx={{fontWeight: '600', fontSize: { xs: '1.8rem', sm: '2rem', md: '2.55rem', lg: '4rem'}}}>
          SERVICES
        </Typography>
      </Box>
      <Box sx={{height: '50vh'}}>
        <Grid container sx={{bgcolor: '#000000'}}>
          <Grid item xs={12} lg={6}>
            <Box sx={{height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: 'auto 100px'}}>
              <Typography variant='h4' sx={{fontSize: { xs: '1.6rem', sm: '2rem', md: '2.55rem', lg: '3rem'}, bgcolor: { xs: 'pink', sm: 'blue', md: 'green', lg: 'red', xl: 'purple'}}}>
                Audio Visual Solutions
              </Typography>
              <br />
              <Typography variant='h5' sx={{fontWeight: '300', fontSize: { xs: '1.25rem', sm: '1.5rem'}}}>
                Our experienced audio visual technicians will guide you through the technical ins and outs of our services to ensure a seamless experience.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box sx={{backgroundImage: 'url(/mic-mixer.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh', margin: { xs: 'auto 3.125rem', sm: 'auto 6.5rem', md: 'auto 12.5rem', lg: 'auto 6rem', xl: 'auto 6.25rem'}}}>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{height: { xs: '100vh', lg: '25vh'}, bgcolor: '#000000'}}></Box>
      <Box sx={{height: '50vh'}}>
        <Grid container sx={{bgcolor: '#000000'}}>
          <Grid item xs={12} lg={6}>
            <Box sx={{backgroundImage: 'url(/turntables.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh', margin: { xs: 'auto 3.125rem', sm: 'auto 6.5rem', md: 'auto 12.5rem', lg: 'auto 6rem', xl: 'auto 6.25rem'}}}>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box sx={{height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: 'auto 100px'}}>
              <Typography variant='h4' sx={{fontSize: { xs: '1.6rem', sm: '2rem', md: '2.55rem', lg: '3rem'}}}>
                DJ / Emcee
              </Typography>
              <br />
              <Typography variant='h5' sx={{fontWeight: '300', fontSize: { xs: '1.25rem', sm: '1.5rem'}}}>
                With over 40 years of combined experience, our blend of veteran and junior level DJs will help make your occasion memorable.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{height: { xs: '100vh', lg: '25vh'}, bgcolor: '#000000'}}></Box>
      <Box sx={{height: '50vh'}}>
        <Grid container sx={{bgcolor: '#000000'}}>
          <Grid item xs={12} lg={6}>
            <Box sx={{height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: 'auto 100px'}}>
              <Typography variant='h4' sx={{fontSize: { xs: '1.6rem', sm: '2rem', md: '2.55rem', lg: '3rem'}}}>
                Lighting
              </Typography>
              <br />
              <Typography variant='h5' sx={{fontWeight: '300', fontSize: { xs: '1.25rem', sm: '1.5rem'}}}>
                Industry standard uplighting, dance lights, projectors, and creative staging that will bring your event to life.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box sx={{backgroundImage: 'url(/lighting-equipment.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh', margin: { xs: 'auto 3.125rem', sm: 'auto 6.5rem', md: 'auto 12.5rem', lg: 'auto 6rem', xl: 'auto 6.25rem'}}}>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{height: { xs: '100vh', lg: '25vh'}, bgcolor: '#000000'}}></Box>
      <Box sx={{height: '50vh'}}>
        <Grid container sx={{bgcolor: '#000000'}}>
          <Grid item xs={12} lg={6}>
            <Box sx={{backgroundImage: 'url(/wifi.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh', margin: { xs: 'auto 3.125rem', sm: 'auto 6.5rem', md: 'auto 12.5rem', lg: 'auto 6rem', xl: 'auto 6.25rem'}}}>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box sx={{height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: 'auto 100px'}}>
              <Typography variant='h4' sx={{fontSize: { xs: '1.6rem', sm: '2rem', md: '2.55rem', lg: '3rem'}}}>
                High Speed Internet
              </Typography>
              <br />
              <Typography variant='h5' sx={{fontWeight: '300', fontSize: { xs: '1.25rem', sm: '1.5rem'}}}>
                WiFi available for all guests.
              </Typography>
              <Typography variant='h5' sx={{fontWeight: '300', fontSize: { xs: '1.25rem', sm: '1.5rem'}}}>
                (Up to 1000 mbps of bandwidth)
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{height: { xs: '50vh', lg: '25vh'}, bgcolor: '#000000'}}></Box>
      <Box sx={{height: '50vh', bgcolor: '#1B1B1B', display: 'flex', alignItems: 'center'}}>
        <Grid container direction='row' justifyContent='space-evenly' alignItems='center'>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card sx={{maxWidth: '350px', bgcolor: '#1B1B1B', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 'none', borderRadius: '0px'}}>
              <PeopleAltIcon color='secondary' fontSize='large' sx={{width: '100px', height: '100px'}}/>
              <br />
              <br />
              <Typography variant='h4' sx={{fontWeight: '400'}}>
                180 STANDING
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card sx={{maxWidth: '350px', bgcolor: '#1B1B1B', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 'none', borderRadius: '0px'}}>
              <EventSeatIcon color='secondary' fontSize='large' sx={{width: '100px', height: '100px'}}/>
              <br />
              <br />
              <Typography variant='h4' sx={{fontWeight: '400'}}>
                120 SITTING
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card sx={{maxWidth: '350px', bgcolor: '#1B1B1B', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', boxShadow: 'none', borderRadius: '0px'}}>
              <TableBarIcon color='secondary' fontSize='large' sx={{width: '100px', height: '100px'}}/>
              <br />
              <br />
              <Typography variant='h4' sx={{fontWeight: '400'}}>
                8 TABLES
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card sx={{maxWidth: '350px', bgcolor: '#1B1B1B', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 'none', borderRadius: '0px'}}>
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