import React from 'react' 
import TableUser from '../Table/tableUser'
import Navigation from '../Navigation/navigation'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import Select from '../UI/Select/Select'
import classes from './adduser.module.css'
import IconButton from '../UI/Button/IconButton'
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';

const EIcon = <EmailRoundedIcon / >
const AIcon = <AccountCircle />
const PIcon = <VpnKeyRoundedIcon />

const AddUser =  (props)  => {
    return (
        <div className = {classes.root}>
           < nav className = {classes.nav}>
            <div className = {classes.navigation}>
                <Navigation />
            </div>
            <h4>App Bar</h4>
            </nav>
            <div className = {classes.main}>
                <div className = {classes.addOneUser}>
                    <h3>ADD ONE USER </h3>
                    <div>
                        <Input label = 'name' icon = {AIcon}/>
                        <Input label = 'email' icon = {EIcon}/>
                        <Input label = 'password' icon = {PIcon}/>
                    </div>
                    <div>
                        <Select label = "ROLE" />
                    </div>
                    <div>
                        <Button label = "ADD USER" />
                    </div>
                </div>
                <div className = {classes.addSomeUser}>
                    <h3> ADD SOME USERS </h3>
                    <h5>upload usres and fill them in</h5>
                    <IconButton />
                    <Button label = "Add All" />
                </div>
                <div className = {classes.table}>
                    <TableUser />
                </div>
            </div>
           
            
        </div>
    )
}

export default AddUser