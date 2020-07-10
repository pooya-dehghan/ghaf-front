import React from 'react'
import classes from './snipper2.module.css'

const Spinner = (props) => (
<div className={classes.skchase} style={{display:props.show ? undefined : 'none'}}>
  <div className={classes.skchasedot}></div>
  <div className={classes.skchasedot}></div>
  <div className={classes.skchasedot}></div>
  <div className={classes.skchasedot}></div>
  <div className={classes.skchasedot}></div>
  <div className={classes.skchasedot}></div>
</div>
)



export default Spinner