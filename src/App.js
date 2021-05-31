import React, { useState } from "react";
import './App.css';

import {AuthProvider} from './contexts/authContext'
import { Route, Switch,BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import Registrar from "./Pages/Registrar/index";
import Login from "./Pages/Login";

import {PrivateRoute } from "./PrivateRoute";

function App() {
 return(

  <Router>
      <AuthProvider>
      <Switch>
        <PrivateRoute exact  path="/" component={HomePage} />
        <Route path="/Registrar" component={Registrar}></Route>
        <Route path="/Login" component={Login}></Route>
      </Switch>
     </AuthProvider>
     
  </Router>
)
 
}
export default App;
