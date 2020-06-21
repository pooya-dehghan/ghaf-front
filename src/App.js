import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './component/Auth/SignIn'
import SignUp from './component/Auth/SignUp'
import TableUser from './component/Table/tableUser'
import Navigation from './component/Navigation/navigation'
import User from './component/User/user'
import Admin from './component/Admin/Admin'
import ModalContent from './component/Modal/ModalContent/ModalContent'
import Button from './component/UI/Button/Button'
function App() {
  let routes = (
    <Switch>
      <Route component={SignIn} path={"/"} exact/>
      <Route component={SignUp} path={"/SignUp"} />
      <Route component={TableUser} path={"/TableUser"}/>
      <Route component={User} path={"/User"}/>
      <Route component={Admin} path={"/Admin"}/>
    </Switch>
  );
  return (
    // <Router>
    //   <>{routes}</>
    // </Router>
    <>
      <Button />
    </>
  );
}

export default App;
