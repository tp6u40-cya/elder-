import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from './styles/globalStyles';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import DonationRecord from './pages/DonationRecord';
import OnlineDonation from './pages/OnlineDonation';

import HomePage from './pages/HomePage';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#111418',
      paper: '#293038',
    },
    primary: {
      main: '#1980e6',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.5rem' },
    h2: { fontSize: '2.2rem' },
    h3: { fontSize: '2rem' },
    h4: { fontSize: '1.8rem' },
    h5: { fontSize: '1.5rem' },
    h6: { fontSize: '1.2rem' },
    subtitle1: { fontSize: '1.1rem' },
    subtitle2: { fontSize: '1rem' },
    body1: { fontSize: '1.1rem' },
    body2: { fontSize: '1rem' },
    button: { fontSize: '1.1rem' },
    caption: { fontSize: '0.9rem' },
    overline: { fontSize: '0.9rem' }
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={GlobalStyles.root}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            <Route path="/donation" element={<Donation />} />
            <Route path="/donation-record" element={<DonationRecord />} />
            <Route path="/online-donation" element={<OnlineDonation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
