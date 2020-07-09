import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Button from '@material-ui/core/Button';

const style = {
  background: '#2979ff',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 36,
  padding: '0 20px',
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.12)',
};
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Button variant="contained" color="primary">
        Add User
      </Button> */}
        <Button style = {style}>
          {props.label}
        </Button>
    </div>
  );
}
