import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export default function Animations(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Skeleton animation = {props.animation} />
    </div>
  );
}
