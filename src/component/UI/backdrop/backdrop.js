import React from 'react'
import classes from './backdrop.module.css'
const backDrop = (props) => {
    return(
        props.open ? <div className = {classes.backdrop}  onClick = {props.onClose}></div> : null
    )
}


export default backDrop