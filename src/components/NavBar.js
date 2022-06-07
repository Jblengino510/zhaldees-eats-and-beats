import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';


function NavBar() {
    const [ value, setValue ] = useState(0)
    const [ anchorEl, setAnchorEl ] = useState(null)
    const open = Boolean(anchorEl);
    const navigate = useNavigate()

    function handleClick(e){
        setAnchorEl(e.currentTarget)
    }


    function handleClose(){
       setAnchorEl(null)
    }
   

    function handleChange(event, newValue) {
        setValue(newValue)
    }



  return (
    <>
        <AppBar position='sticky' elevation={0} sx={{background: '#000', width: '100vw', padding: '40px 0px'}}>
            <Toolbar>
                <Box sx={{display: { sm: 'flex', md: 'none', lg: 'none'}}}>
                    <IconButton color='secondary' size='large' aria-controls={open ? 'demo-positioned-menu' : undefined} aria-haspopup="true"  aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                        <MenuIcon sx={{ fontSize: 40 }}/>
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose} transformOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                            },
                            '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: '#222222',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                            },
                            bgcolor: '#000000',
                            padding: '5px',
                            border: '2px solid #222222'
                        },
                        }}>
                            <MenuItem sx={{bgcolor: '#000000',  paddingRight: '50px', '&:hover': {bgcolor: '#111111'}}}>
                                <Button variant='text' color='secondary' size='large' onClick={() => navigate('/')} sx={{mr: '40px', borderRadius: '0px', '&:hover': {cursor: 'pointer', background: 'none', color: 'rgba(255,255,255,.4)'}}}>
                                    <strong>Home</strong>
                                </Button>
                            </MenuItem>
                            <Divider sx={{bgcolor: '#222222'}}/>
                            <MenuItem sx={{bgcolor: '#000000',  paddingRight: '50px', '&:hover': {backgroundColor: '#111111'}}}>
                                <Button variant='text' color='secondary' size='large' onClick={() => navigate('/about')} sx={{mr: '40px', borderRadius: '0px', '&:hover': {cursor: 'pointer', background: 'none', color: 'rgba(255,255,255,.4)'}}}>
                                    <strong>About</strong>
                                </Button>
                            </MenuItem>
                            <Divider sx={{bgcolor: '#222222'}}/>
                            <MenuItem sx={{bgcolor: '#000000',  paddingRight: '50px', '&:hover': {backgroundColor: '#111111'}}}>
                                <Button variant='text' color='secondary' size='large' onClick={() => navigate('/venue')} sx={{mr: '40px', borderRadius: '0px', '&:hover': {cursor: 'pointer', background: 'none', color: 'rgba(255,255,255,.4)'}}}>
                                    <strong>Venue</strong>
                                </Button>
                            </MenuItem>
                            <Divider sx={{bgcolor: '#222222'}}/>
                            <MenuItem sx={{bgcolor: '#000000',  paddingRight: '50px', '&:hover': {backgroundColor: '#111111'}}}>
                                <Button variant='text' color='secondary' size='large' href='https://www.zhaldeeseatsandbeats.com/' target='_blank' sx={{mr: '40px', borderRadius: '0px', '&:hover': {cursor: 'pointer', background: 'none', color: 'rgba(255,255,255,.4)'}}}>
                                    <strong>Catering</strong>
                                </Button>
                            </MenuItem>
                            <Divider sx={{bgcolor: '#222222'}}/>
                            <MenuItem sx={{bgcolor: '#000000',  paddingRight: '50px', '&:hover': {backgroundColor: '#111111'}}}>
                                <Button variant='text' color='secondary' size='large' onClick={() => navigate('/contact')} sx={{borderRadius: '0px', '&:hover': {cursor: 'pointer', background: 'none', color: 'rgba(255,255,255,.4)'}}}>
                                    <strong>Contact</strong>
                                </Button>
                            </MenuItem>
                        </Menu>
                </Box>
                <Grid container direction='column' justifyContent='center' alignItems='center'>
                    <Grid item xs={12}>
                        <Link to='/'>
                            <Box sx={{width: { xs: '200px', sm: '400px' }}}>
                                <img src='/ZEAB-logo-no-background.png' alt='Eats and Beats Logo' className='responsive'/>
                            </Box>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{mt: '20px', display: { xs: 'none', md: 'block', lg: 'block' }}}>
                            <Button variant='text' color='secondary' size='large' onClick={() => navigate('/')} sx={{mr: '40px', borderRadius: '0px', '&:hover': {cursor: 'pointer', background: 'none', color: 'rgba(255,255,255,.4)'}}}>
                                <strong>Home</strong>
                            </Button>
                            <Button variant='text' color='secondary' size='large' onClick={() => navigate('/about')} sx={{mr: '40px', borderRadius: '0px', '&:hover': {cursor: 'pointer', background: 'none', color: 'rgba(255,255,255,.4)'}}}>
                                <strong>About</strong>
                            </Button>
                            <Button variant='text' color='secondary' size='large' onClick={() => navigate('/venue')} sx={{mr: '40px', borderRadius: '0px', '&:hover': {cursor: 'pointer', background: 'none', color: 'rgba(255,255,255,.4)'}}}>
                                <strong>Venue</strong>
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