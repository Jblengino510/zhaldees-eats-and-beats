import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function Footer() {
  return (
    <footer style={{width: '100%', height: '100%', backgroundColor: '#1B1B1B', padding: '100px 0px'}}>
        <Grid container direction='row' justifyContent='space-around' alignItems='center'>
            <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center'}}>
                <img src='/Z-logo-white.png' alt='Eats & Beats Logo' width='100px' height='100px' />
            </Grid>
            <Grid item xs={4}>
                <Typography variant='h6' sx={{fontWeight: '300'}}>
                    <strong>1517 Webster St, Alameda CA 94501</strong>
                </Typography>
                <Typography variant='h6' sx={{fontWeight: '300'}}>
                    <strong>Phone: (510) 213-2525</strong>
                </Typography>
                <Typography variant='h6' sx={{fontWeight: '300'}}>
                    <strong>Email: zhaldee@gmail.com</strong>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h6' sx={{fontWeight: '300'}}>
                    We are Zhaldee’s Eats & Beats — a full-service events and catering company supporting the community of Alameda and the greater Bay Area since 2017. Welcome to our home!
                </Typography>
            </Grid>
            <Grid item xs={2} sx={{mt: '50px', display: 'flex', justifyContent: 'center'}}>
                <img src='/instagram.png' alt='Instagram Logo' width='50px' height='50px' style={{marginRight: '10px'}}/>
                <img src='/twitch.png' alt='Twitch Logo' width='50px' height='50px' />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={6}></Grid>
        </Grid>
    </footer>
  )
}

export default Footer