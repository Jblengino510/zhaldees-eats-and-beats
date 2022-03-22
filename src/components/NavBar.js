import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function NavBar() {
    const navigate = useNavigate()


  return (
    <>
        <AppBar position='fixed' elevation={0} sx={{background: '#000000', width: '100vw', padding: '20px'}}>
            <Toolbar>
                <Grid container direction='column' justifyContent='center' alignItems='center'>
                    <Grid item xs={12}>
                        <Link to='/'>
                            <img src='/ZEAB-logo-no-background.png' alt='Eats and Beats Logo' width='400px'/>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{mt: '20px', mb: '20px'}}>
                            <Button variant='text' color='secondary' size='large' onClick={() => navigate('/')} sx={{mr: '40px', borderRadius: '0px', '&:hover': {cursor: 'pointer', background: 'none', color: 'rgba(255,255,255,.4)'}}}>
                                <strong>Home</strong>
                            </Button>
                            <Button variant='text' color='secondary' size='large' onClick={() => navigate('/venue')} sx={{mr: '40px', borderRadius: '0px', '&:hover': {cursor: 'pointer', background: 'none', color: 'rgba(255,255,255,.4)'}}}>
                                <strong>Venue</strong>
                            </Button>
                            <Button variant='text' color='secondary' size='large' onClick={() => navigate('/media')} sx={{mr: '40px', borderRadius: '0px', '&:hover': {cursor: 'pointer', background: 'none', color: 'rgba(255,255,255,.4)'}}}>
                                <strong>Media</strong>
                            </Button>
                            <Button variant='text' color='secondary' size='large' href='https://www.zhaldeeseatsandbeats.com/' target='_blank' sx={{mr: '40px', borderRadius: '0px', '&:hover': {cursor: 'pointer', background: 'none', color: 'rgba(255,255,255,.4)'}}}>
                                <strong>Catering</strong>
                            </Button>
                            <Button variant='text' color='secondary' size='large' onClick={() => navigate('/contact')} sx={{borderRadius: '0px', '&:hover': {cursor: 'pointer', background: 'none', color: 'rgba(255,255,255,.4)'}}}>
                                <strong>Contact</strong>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default NavBar