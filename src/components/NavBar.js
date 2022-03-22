import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function NavBar() {
  return (
    <>
        <AppBar position='fixed' elevation={0} sx={{background: '#000000', width: '100vw', padding: '20px'}}>
            <Toolbar>
                <Link to='/'>
                    <img src='/ZEAB-logo-no-background.png' alt='Eats and Beats Logo' width='400px'/>
                </Link>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default NavBar