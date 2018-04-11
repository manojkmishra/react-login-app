import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import { resetPasswordRequest } from "../../actions/auth";

class ForgotPasswordPage extends React.Component
 {  state = {    success: false  }; //if false we show this , if true we display some message--Email has been sent.
    submit = data => this.props.resetPasswordRequest(data) 
                               .then(() => this.setState({ success: true }));
    //this submit clicked--will start resetpasswordrequest----and it will set state=true---so --email has been sent
    render() { return ( <div> {this.state.success ? 
                         ( <Message>Email has been sent.</Message> ) : ( <ForgotPasswordForm submit={this.submit} /> )}
                        </div>
                      );
             }
 }

ForgotPasswordPage.propTypes = { resetPasswordRequest: PropTypes.func.isRequired };

export default connect(null, { resetPasswordRequest })(ForgotPasswordPage);