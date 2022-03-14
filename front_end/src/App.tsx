import * as React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Grid from '@mui/material/Grid'
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(18, 24, 40)',
      light: 'rgb(101, 116, 139)'
    },
    secondary: {
      main: 'rgb(209, 213, 219)',
      light: 'rgba(255, 255, 255, 0.08)'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
})

const App: React.FC = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;