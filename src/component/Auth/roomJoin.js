import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Tab from './navigate'
import axios from 'axios'
import Success from '../Alert/Success'
import Behdad from '../../assets/fonts/Behdad-Regular.woff2'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {useParams} from 'react-router-dom'

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
    MuiBottomNavigationAction: {
      label: {
        fontSize: '1.5rem'
      },
      root:{
          '&.Mui-selected': {
            color: 'rgba(255, 0, 76, 0.795)'
          }
        },
    },
    
    MuiSvgIcon: {
     root: {
       fontSize: '2rem'
     } 
    }
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        قاف
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  typography : {
    paddingBottom: theme.spacing(4)
  },
  
}));

export default function RoomJoin(props) {
  const classes = useStyles();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [message,setMessage] = useState('');
  const [open,setOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [tab,setTab] = useState(0);
  let params = useParams()
  console.log('params of the usePramas',params)
  console.log('props: ',props)
  let room_id = params.room_code
  console.log('name',name)
  console.log('email',email)
  console.log('password',password)
  const clickHandlerUser = (e) => {
  e.preventDefault()
  console.log("doing ...");
    axios.get('http://back.mtamadon.ir:9898/api/join/' + room_id,{
    email : email,
    password : password
  })
  .then(function (response) {
    console.log(response);
    if(response.data === 'همچین کلاسی وجود ندارد!'){
      setSeverity("error");
      setMessage('همچین کلاسی وجود ندارد');
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
    }else{
      setSeverity("success");
      setMessage(response.data);
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
    }
    
  })
  .catch(function (error) {
    console.log('failed')
    console.log(error);
    setSeverity('error')
    setMessage('مشکلی وجود دارد')
    setOpen(true)
    setTimeout(() => setOpen(false), 3000);
  });
};
const clickHandlerGuest = (e) => {
  e.preventDefault()
  console.log("doing ...");
    axios.get('http://back.mtamadon.ir:9898/api/join/' + room_id,{
    name:name
  })
  .then(function (response) {
    console.log(response);
    if(response.data === 'همچین کلاسی وجود ندارد!'){
      setSeverity("error");
      setMessage('همچین کلاسی وجود ندارد');
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
    }else{
      setSeverity("success");
      setMessage(response.data);
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
    }
    
  })
  .catch(function (error) {
    console.log('failed')
    console.log(error);
    setSeverity('error')
    setMessage('مشکلی وجود دارد')
    setOpen(true)
    setTimeout(() => setOpen(false), 3000);
  });
};
const closeHandler = () => {
  setOpen(false)
}
const handleChange = (event,newValue) => {
  setTab(newValue);
}

const guestForm = 
        <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="نام کاربری"
              type="name"
              id="name"
              autoComplete="current-password"
              onChange = {(e) => setName(e.target.value)}
              value = {name}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {clickHandlerGuest}
            >
              وارد شوید
            </Button>
      </form>
const userForm = 
<form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="ایمیل"
              name="email"
              autoComplete="email"
              onChange = {(e) => setEmail(e.target.value)}
              value = {email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="پسورد"
              type="password"
              id="password"
              onChange = {(e) => setPassword(e.target.value)}
              value = {password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {clickHandlerUser}
            >
              وارد شوید
            </Button>
          </form>
  const Form = tab === 0 ? guestForm : userForm 
  console.log('props: ',props)
  return (
  <ThemeProvider theme={theme}>
    <Grid container component="main" className={classes.root}>
      <Success open = {open} severity = {severity} message = {message} onClose = {closeHandler}/>
      {/* <CssBaseline /> */}
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Grid item>
          <Typography component="h1" variant="h5" className = {classes.typography}>
            وارد شدن به کلاس
          </Typography>
        </Grid>
          <Grid container justify = "center" >
            <Tab onChange = {handleChange} value = {tab}/>
          </Grid>
          {Form}
          <Box mt={5}>
              <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  </ThemeProvider>
  );
}