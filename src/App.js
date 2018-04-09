//this one is working as router---for all pages

import React from 'react';
import { Route } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from "./components/pages/DashboardPage";
import UserRoute from "./components/routes/UserRoute"; //-----applicable to pages where its applied
import GuestRoute from "./components/routes/GuestRoute";
import PropTypes from "prop-types";

//console.log('location=',path);
const App = ({ location}) => (
  <div className="ui container"> 
    <Route  location={location} path="/" exact component ={HomePage} />  
    <GuestRoute  location={location} path="/login" exact component ={LoginPage} />
    <UserRoute  location={location} path="/dashboard"   exact   component={DashboardPage} />
  </div>
  );
  
  App.propTypes = 
  { location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired 
 
};


export default App;
