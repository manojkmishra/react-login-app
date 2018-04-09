import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";


const DashboardPage = ({isConfirmed}) => 
(    <div>    {!isConfirmed && <ConfirmEmailMessage />}  </div>  );

DashboardPage.propTypes = {  isConfirmed: PropTypes.bool.isRequired  };  //this will be required

function mapStateToProps(state) 
{  console.log('/pages/dashboard--!!state.user.confirmed=', !!state.user.confirmed);
     return {        isConfirmed: !!state.user.confirmed,  }; 
}

export default connect(mapStateToProps)(DashboardPage);