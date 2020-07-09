import React,{Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './component/Auth/SignIn'
import SignUp from './component/Auth/SignUp'
import User from './component/User/user'
import Admin from './component/Admin/Admin'
import ModalContent from './component/Modal/ModalContent/ModalContent'
import Button from './component/UI/Button/Button'
import AddUser from "./component/AddUser/adduser";
import Input from './component/UI/Input/Input'
import IconButton from './component/UI/Button/IconButton'
import RoomJoin from './component/Auth/roomJoin'
import Info from './component/Alert/Info'
import Snipper from './component/UI/Snipper/snipper'


function App() {
 const SignIn = React.lazy(() => {
    return import('./component/Auth/SignIn')
  })
   const SignUp = React.lazy(() => {
     return import('./component/Auth/SignUp')
   })
    const User = React.lazy(() => {
      return import('./component/User/user')
    })
     const Admin = React.lazy(() => {
       return import('./component/Admin/Admin')
     })
      const AddUser = React.lazy(() => {
        return import('./component/AddUser/adduser')
      })
       const RoomJoin = React.lazy(() => {
         return import('./component/Auth/roomJoin')
       })

  let routes = (
    <Switch>
      <Route component={SignIn} path={"/"} exact/>
      <Route component={SignUp} path={"/SignUp"} />
      <Route component={User} path={"/User"}/>
      <Route component={Admin} path={"/Admin"}/>
      <Route component={AddUser} path={"/AddUser"}/>
      <Route component={RoomJoin} path={"/join/:room_code"} />
    </Switch>
  );
  return (
    <Router>
    <Suspense fallback = {Snipper()}>
      {routes}
    </Suspense>
    </Router>
    // <>  
    //   <Info />
    // </>
  );
}

export default App;
