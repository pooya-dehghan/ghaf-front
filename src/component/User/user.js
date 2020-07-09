import React,{useState,useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Navigation from '../Navigation/navigation'
import TableUser from '../Table/tableUser'
import classes from './user.module.css'
import Behdad from '../../assets/fonts/Behdad-Regular.woff2'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Skeleton from '../UI/Skeleton/Skeleton'
import axios from 'axios'

const raleway = {
  fontFamily: 'Arial',
  fontStyle: 'Arial',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Behdad'),
    local('Raleway-Regular'),
    url(${Behdad}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Behdad, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [raleway],
      },
    },
  },
});
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://ghaf.live">
        قاف
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const User = () => {
const [loading , setLoading] = useState(true)
let token = localStorage.getItem('token')
useEffect(()=>{
  console.log('2423234')
  console.log('token: ',token)
  axios.get('/http://back.mtamadon.ir:9898/api/rooms', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(function (response) {
    // handle success
    console.log(response);
    setLoading(false)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    setLoading(false)
  })
  .then(function () {
    // always executed
  });
},[])
const skeleton = [1,2,3,4,5].map(()=>{return <Skeleton />})
const table = loading ? skeleton : <TableUser />

return(
<ThemeProvider theme={theme}>
  <CssBaseline />
  <div className = {classes.root}>
    <nav className = {classes.nav}>
      <div className = {classes.navigation}>
          <Navigation />
      </div>
      <h4>منو </h4>
      </nav>
    <div className = {classes.table}>
      {table}
    </div>
    <Box mt={5}>
      <Copyright />
    </Box>
  </div>
</ThemeProvider>
  )
}

export default User