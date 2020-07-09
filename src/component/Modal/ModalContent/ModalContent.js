import React from 'react';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Button from '../../UI/Button/Button';
import classes from './ModalContent.module.css'

export default function Switches(props) {
  return (
    <div className = {classes.root} style = {{display :props.open ? "flex" : "none",opacity: props.open ? 1 : 0}} dir="rtl" >
        <div className = { classes.input}>
            <TextField  id="standard-error" label="ایمیل" placeholder="ایمیل" />
        </div>
        <div className = { classes.input}>
            <TextField  id="standard-error" label="نام کاربری" placeholder="نام کاربری" />
        </div>
        <div className = { classes.input}>
            <TextField  id="standard-error" label="کد" placeholder="کد کاربر" />
        </div>
        <div className={classes.switch}>
            <div>
            اجازه دسترسی یک
                <Switch
                    // checked={state.checkedA}
                    // onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}/>
            </div>
            <div>
                اجازه دسترسی دو
                <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }} />
            </div>
        </div>
        <div className = {classes.button}>
            <Button label = "اپدیت و ساخت" />
        </div>   
    </div>
  );
}
