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
import axios from 'axios'
import Success from '../Alert/Success'
import Behdad from '../../assets/fonts/Behdad-Regular.woff2'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
}));

export default function SignInSide() {
  const classes = useStyles();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [message,setMessage] = useState('');
  const [open,setOpen] = useState(false);
  const [severity, setSeverity] = useState("");

  // let formData = new FormData();
  // formData.append('email',email)
  // formData.append('password',password)
const clickHandler = (e) => {
  e.preventDefault()
  console.log("doing ...");
    axios.post('http://back.mtamadon.ir:9898/api/login', {
    email: email,
    password:password
  })
  .then(function (response) {
    console.log('sucsseful');
    console.log(response);
    setSeverity("success");
    localStorage.setItem('token',response.data.token)
    setMessage('با موفقیت وارد شدید');
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  })
  .catch(function (error) {
    setSeverity('error')
    setMessage('ایمیل یا پسورد غلط است')
    setOpen(true)
    setTimeout(() => setOpen(false), 3000);
  });
};
const closeHandler = () => {
  setOpen(false)
}
  return (
  <ThemeProvider theme={theme}>
    <Grid container component="main" className={classes.root}>
      <Success open = {open} severity = {severity} message = {message} onClose = {closeHandler}/>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper} dir = 'rtl'>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            لاگین
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="ادرس ایمیل"
              name="email"
              autoComplete="email"
              autoFocus
              onChange = {(e) => setEmail(e.target.value)}
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
              autoComplete="current-password"
              onChange = {(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {clickHandler}
            >
              لاگین
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"حساب کاربری ندارید ؟ ثبت نام کنید"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  </ThemeProvider>
  );
}