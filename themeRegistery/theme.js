import { Nunito } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const nunito = Nunito({
  weight: ['700','800'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#1F64FF",
      dark:"#000",
    },
    secondary: {
      main: "#C2DAFBE5",
    },
    ease: {
      main: "#C0C0C0",
    },
  },
  typography: {
    fontFamily: nunito.style.fontFamily,
    
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
    MuiSwitch :{
      styleOverrides:{
        root:{
          
        },
        track: {
          backgroundColor: '#4192FF66',
          border:"2px solid  #4192FF"
        },
        thumb :{
          border:"2px solid  #4192FF"
          
        },
       
        
      }
    }
  },
});

export default theme;
