import '../App.css';
import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import Venue from './Venue'
import Media from './Media'
import Contact from './Contact'


const theme = createTheme({
  palette: {
    primary: {
      main: '#1B1B1B'
    },
    secondary: {
      main: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: 'Inter (Bold)'
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/media' element={<Media />} />
        <Route path='/venue' element={<Venue />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
