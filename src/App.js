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
import ElderlySupport from './pages/ElderlySupport';
import ElderlyProtection from './pages/ElderlyProtection';
import ElderlySearch from './pages/ElderlySearch';
import ElderlyRescue from './pages/ElderlyRescue';
import ElderlyService from './pages/ElderlyService';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import DonationRecord from './pages/DonationRecord';
import OnlineDonation from './pages/OnlineDonation';

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
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/elderly-support" element={<ElderlySupport />} />
            <Route path="/elderly-protection" element={<ElderlyProtection />} />
            <Route path="/elderly-search" element={<ElderlySearch />} />
            <Route path="/elderly-rescue" element={<ElderlyRescue />} />
            <Route path="/elderly-service" element={<ElderlyService />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/donation-record" element={<DonationRecord />} />
            <Route path="/online-donation" element={<OnlineDonation />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
