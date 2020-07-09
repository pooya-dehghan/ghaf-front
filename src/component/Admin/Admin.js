import React,{useState} from 'react'
import Navigation from '../Navigation/navigation'
import TableAdmin from '../Table/tableAdmin'
import classes from './Admin.module.css'
import Modal from '../Modal/ModalContent/ModalContent'
import Backdrop from '../UI/backdrop/backdrop'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Behdad from '../../assets/fonts/Behdad-Regular.woff2'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

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
const Admin = () => {
    const [ open , setOpen ] = useState(false)
    console.log('open: ',open)
    return(
<ThemeProvider theme={theme}>
<CssBaseline />
  <div className = {classes.root}>
    <Modal open = {open} />
        <Backdrop open ={open} onClose={() => setOpen(false)} />
     <nav className = {classes.nav}>
      <div className = {classes.navigation}>
          <Navigation />
      </div>
      <h4>منو</h4>
      </nav>
    <div className = {classes.table}>
        <TableAdmin onClick = {() => setOpen(true)} />
    </div>
    <Box mt={5}>
      <Copyright />
    </Box>
  </div>
</ThemeProvider>
    )
}

export default Admin