import React from 'react'
import classes from './backdrop2.module.css'

const backDrop = (props) => {
    return(
        props.show ? <div className = {classes.root}></div> : null
    )
}

export default backDrop