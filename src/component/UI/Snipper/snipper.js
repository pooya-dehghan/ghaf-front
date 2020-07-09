import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import classes from './snipper.module.css'

export default function CircularUnderLoad() {

  return(
      <div className = { classes.root}>
        <CircularProgress disableShrink />
      </div>
  ) 
}
