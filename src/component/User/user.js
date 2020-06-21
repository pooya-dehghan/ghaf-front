import React from 'react'
import Navigation from '../Navigation/navigation'
import TableUser from '../Table/tableUser'
import classes from './user.module.css'

const User = () => {
    return(
  <div className = {classes.root}>
  <div className = {classes.paper}>
    <Navigation />
  </div>
  <div className = {classes.paper}>
    <TableUser />
  </div>
  </div>
    )
}

export default User