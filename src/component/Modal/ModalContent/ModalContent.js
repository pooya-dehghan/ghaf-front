import React from 'react';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from './ModalContent.module.css'

export default function Switches() {
  return (
    <div className = {classes.root}>
        <div className = { classes.input}>
            <TextField  id="standard-error" label="email" placeholder="Hello World" />
        </div>
        <div className = { classes.input}>
            <TextField  id="standard-error" label="username" placeholder="Hello World" />
        </div>
        <div className = { classes.input}>
            <TextField  id="standard-error" label="code" placeholder="Hello World" />
        </div>
        <div className={classes.switch}>
            <div>
            allow rule A
                <Switch
                    // checked={state.checkedA}
                    // onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}/>
            </div>
            <div>
            allow rule B
                <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }} />
            </div>
        </div>
        <div className = {classes.button}>
        <Button variant="contained" color="primary">
            Update/Create
        </Button>
        </div>   
    </div>
  );
}
