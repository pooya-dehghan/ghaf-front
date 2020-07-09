import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '0%',
    '& > * + *': {
      marginTop: theme.spacing(0),
    },
  },
}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);
  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //    setOpen(false);
  // };

  return (
    <div className={classes.root}>
      <Snackbar open={props.open}  onClose={props.onClose}>
        <Alert onClose={props.onClose} severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
