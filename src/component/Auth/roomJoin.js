import React,{useState, useEffect} from 'react';
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
import Snipper from '../UI/Snipper/snipper2'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {useParams} from 'react-router-dom'
import Image from '../../assets/image/2-ghafmobile.png'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

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
  direction: 'rtl',
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
      <Link color="inherit" href="https://ghaf.live/">
        ghaf
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
    backgroundImage: `url(${Image})`,
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
  const [isWaiting , setIsWaiting] = useState(false);
  let params = useParams();
  let room_id = params.room_code;

  useEffect(() => {
    if(isWaiting){
      const interval = setInterval(async () => {
        await axios.post('somethin' + room_id, {
          email: email,
          password: password
        })
        .then(function (response) {
          if(response.data.message === 'به زودی به جلسه وارد می‌شوید.'){
            setIsWaiting(false)
            window.location.href = response.data.url
          }
        })
        .catch(function (error){
          setSeverity('error')
          setMessage('مشکلی وجود دارد')
          setOpen(true)
          setTimeout(() => setOpen(false), 3000);
        }); 
      }, 10000);
      return () => clearInterval(interval)
    }
  })

  const clickHandlerUser = (e) => {
  e.preventDefault()
    axios.post('something' + room_id ,{
    email : email,
    password : password
  })
  .then(function (response) {
    if(response.data.message === 'همچین کلاسی وجود ندارد!'){
      setSeverity("error");
      setMessage('همچین کلاسی وجود ندارد');
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
    }if(response.data.message === 'شما دسترسی ورود به این جلسه را ندارید!'){
      setSeverity("success");
      setMessage('شما دسترسی ورود به این جلسه را ندارید');
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
    }
    //پس از شروع جلسه به صورت خودکار وارد می‌شوید.
    if(response.data.message === 'پس از شروع جلسه به صورت خودکار وارد می‌شوید.'){
      setSeverity("success");
      setMessage(response.data.message);
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
      setIsWaiting(true)
    }if(response.data.message === 'به زودی به جلسه وارد می‌شوید.'){
      setSeverity("success");
      setMessage(response.data.message);
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
      window.location.href = response.data.url
    }
  })
  .catch(function (error) {
    setSeverity('error')
    setMessage('مشکلی وجود دارد')
    setOpen(true)
    setTimeout(() => setOpen(false), 3000);
  });
};

const clickHandlerGuest = (e) => {
  e.preventDefault()

    axios.get('something' + room_id,{
    name:name
  })
  .then(function (response) {
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
  const Form = tab === 1 ? guestForm : userForm 
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
      <Snipper show = {isWaiting}/>
        <Grid container component="main" className={classes.root}>
          <Success
            open={open}
            severity={severity}
            message={message}
            onClose={closeHandler}
          />
          {/* <CssBaseline /> */}
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper} dir="rtl">
              <Grid item>
                <Typography
                  component="h1"
                  variant="h5"
                  className={classes.typography}
                >
                  وارد شدن به کلاس
                </Typography>
              </Grid>
              <Grid container justify="center">
                <Tab onChange={handleChange} value={tab} />
              </Grid>
              {Form}
              <Box mt={5}>
                <Copyright />
              </Box>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </StylesProvider>
  );
}