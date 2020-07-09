import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios'
import Success from '../Alert/Success'
import Behdad from '../../assets/fonts/Behdad-Regular.woff2'
import styled from '../../assets/css/global.module.css'

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
        سامانه قاف
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// const theme = createMuiTheme({
//   direction: 'rtl', // Both here and <body dir="rtl">
// });
const useStyles = makeStyles((theme) => ({
  direction: 'rtl',
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
    direction:'rtl'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [message,setMessage] = useState('');
  const [open,setOpen] = useState(false);
  const [severity, setSeverity] = useState("");

  const clickHandler = (e) => {
  e.preventDefault()
  console.log("doing ...");
    axios.post('http://back.mtamadon.ir:9898/api/register', {
    email: email,
    password: password,
    name: name
  })
  .then(function (response) {
    console.log('sucsseful');
    console.log(response);
    if(response.data === 'قبلا با این ایمیل ثبت‌نام کرده‌اید.'){
      console.log('ok shod')
      setSeverity("error");
      setMessage('قبلا با این ایمیل ثبت‌نام کرده‌اید');
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
    }if(response.data === 'ایمیل به طور صحیح وارد نشده.'){
      setSeverity("error");
      setMessage('ایمیل به طور صحیح وارد نشده');
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
    }if(response.data === 'فیلد اجباری ست.'){
      setSeverity("error");
      setMessage('فیلد اجباری ست');
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
    setMessage('مشکلی رخ داده است')
    setOpen(true)
    setTimeout(() => setOpen(false), 3000);
  });
};
const closeHandler = () => {
  setOpen(false)
}
  return (
  <ThemeProvider theme={theme}>
  {/* // <CssBaseline /> */}
    <Container component="main" maxWidth="xs">
      <Success open = {open} severity = {severity} message = {message} onClose = {closeHandler}/>
      <CssBaseline />
      <div className={classes.paper} dir="rtl">
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className = 'signup'>
         ایجاد حساب کاربری
        </Typography>
        <form className={classes.form}   noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="ایمیل"
                name="email"
                autoComplete="email"
                onChange = {(e) => setEmail(e.target.value) }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="نام کاربری"
                name="name"
                autoComplete="name"
                onChange = {(e) => setName(e.target.value) }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="پسورد"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange = {(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {clickHandler}
          >
            ایجاد حساب
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
               حساب دارید؟ کلیک کنید
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
   </ThemeProvider>
  );
}