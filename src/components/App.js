import '../App.css';
import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import Venue from './Venue'
import About from './About'
import Contact from './Contact'


const theme = createTheme({
  palette: {
    primary: {
      main: '#1B1B1B'
    },
    secondary: {
      main: '#FFFFFF'
    },
    text: {
      primary: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: 'Work Sans',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '2px solid #000000',
          '&:hover': { border: '2px solid #FFFFFF' }
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#FFFFFF'
        }
      }
    }
  },
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/venue' element={<Venue />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
