import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';



function Footer() {
  return (
    <footer style={{width: '100%', height: '100%', backgroundColor: '#1B1B1B', padding: '100px 0px'}}>
        <Grid container direction='row' justifyContent='space-around' alignItems='center'>
            <Grid item xs={12} md={2} sx={{display: 'flex', justifyContent: { xs: 'flex-start', md: 'center' }, ml: { xs: '50px', md: '0px' }}}>
                <img src='/Z-logo-white.png' alt='Eats & Beats Logo' width='100px' height='100px' />
            </Grid>
            <Box sx={{display: { xs: 'block', lg: 'none' }, height: '10vh', bgcolor: '#1b1b1b'}}></Box>
            <Grid item xs={12} md={4} sx={{ml: { xs: '50px', md: '0px' }}}>
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
            <Box sx={{display: { xs: 'block', lg: 'none' }, height: '10vh', bgcolor: '#1b1b1b'}}></Box>
            <Grid item xs={12} md={6} sx={{ml: { xs: '50px', md: '0px' }}}>
                <Typography variant='h6' sx={{fontWeight: '300'}}>
                    We are Zhaldee’s Eats & Beats — a full-service events and catering company supporting the community of Alameda and the greater Bay Area since 2017. Welcome to our home!
                </Typography>
            </Grid>
            <Grid item xs={12} md={3} sx={{mt: '50px', display: 'flex', justifyContent: 'center'}}>
                <Card sx={{bgcolor: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', mr: '10px', padding: '5px'}}>
                    <a href='https://www.instagram.com/zhaldeeseatsandbeats/?hl=en' target='_blank'>
                        <img src='/instagram.png' alt='Instagram Logo' width='50px' height='50px' />
                    </a>
                </Card>
                <Card sx={{bgcolor: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', mr: '10px', padding: '5px'}}>
                    <a href='https://www.twitch.tv/zhaldee' target='_blank'>
                        <img src='/twitch.png' alt='Twitch Logo' width='50px' height='50px' />
                    </a>
                </Card>
                <Card sx={{bgcolor: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', mr: '10px', padding: '5px'}}>
                    <a href='https://soundcloud.com/zhaldee?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' target='_blank'>
                        <img src='/soundcloud-logo.png' alt='Twitch Logo' width='50px' height='50px' />
                    </a>
                </Card>
                <Card sx={{bgcolor: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5px'}}>
                    <a href='https://www.yelp.com/biz/zhaldees-eats-and-beats-alameda?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)' target='_blank'>
                        <img src='/yelp-logo.png' alt='Twitch Logo' width='50px' height='50px' />
                    </a>
                </Card>
            </Grid>
            <Grid item xs={12} md={3}></Grid>
            <Grid item xs={12} md={6}></Grid>
        </Grid>
    </footer>
  )
}

export default Footer