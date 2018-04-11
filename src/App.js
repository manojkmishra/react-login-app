//this one is working as router---for all pages

import React from 'react';
import { Route } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from "./components/pages/DashboardPage";
import UserRoute from "./components/routes/UserRoute"; //-----applicable to pages where its applied
import GuestRoute from "./components/routes/GuestRoute";
import PropTypes from "prop-types";
import SignupPage from "./components/pages/SignupPage";
import ConfirmationPage from "./components/pages/ConfirmationPage"; //----after new user signup
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import TopNavigation from "./components/navigation/TopNavigation";
import { connect } from "react-redux";


//console.log('location=',path);
const App = ({ location, isAuthenticated }) => (
  <div className="ui container"> 
     { isAuthenticated && <TopNavigation />}
    <Route  location={location} path="/" exact component ={HomePage} />  
    <GuestRoute  location={location} path="/login" exact component ={LoginPage} />
    <UserRoute  location={location} path="/dashboard"   exact   component={DashboardPage} />
    <GuestRoute location={location} path="/signup"  exact  component={SignupPage}   />
    <Route location={location}  path="/confirmation/:token"  exact component={ConfirmationPage}/>
    <GuestRoute  location={location}  path="/forgot_password"  exact  component={ForgotPasswordPage} />
    <GuestRoute   location={location} path="/reset_password/:token"  exact component={ResetPasswordPage}/>
  </div>
  );
  
  App.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  };

function mapStateToProps(state) {  return {  isAuthenticated: !!state.user.email  }; }


export default connect(mapStateToProps)(App);
