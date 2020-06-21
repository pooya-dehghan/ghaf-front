import React,{useState} from 'react'
import Navigation from '../Navigation/navigation'
import TableAdmin from '../Table/tableAdmin'
import classes from './Admin.module.css'
import Modal from '../Modal/Modal'

const Admin = () => {
    const [ modal , setModal ] = useState(false)
    console.log('open: ',modal)
    return(
  <div className = {classes.root}>
    <Modal open = {modal} onClose={() => setModal(false)}/>
    <div className = {classes.paper}>
        <Navigation />
    </div>
    <div className = {classes.paper}>
        <TableAdmin onClick = {() => setModal(true)} />
    </div>
  </div>
    )
}

export default Admin