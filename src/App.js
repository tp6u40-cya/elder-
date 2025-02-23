import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from './styles/globalStyles';
import Login from './pages/Login';
import Home from './pages/Home';
import InstrumentList from './pages/InstrumentList';  // Make sure this import is correct
import InstrumentDetail from './pages/InstrumentDetail';

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
            <Route path="/login" element={<Login />} />
            <Route path="/instruments" element={<InstrumentList />} />  {/* 主要路徑 */}
            <Route path="/instruments/:id" element={<InstrumentDetail />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
