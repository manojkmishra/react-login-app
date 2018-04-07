import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../forms/LoginForm';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';


class LoginPage extends React.Component
{ submit=data=>
  {
   console.log('/src/comp/pages/loginpage-data',data)
   this.props.login(data).then(()=>this.props.history.push("/"));  //this will return promise--then we go to home page after login is correct
  };
  render()
  { return(  <div> <h1>Login Page</h1>{console.log('/src/components/Pages/LoginPage.js-inside render')}
             <LoginForm submit={this.submit}/>
             </div>
          );
  }
}//class finish

LoginPage.propTypes=
{ history: PropTypes.shape(
  { push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
}

export default connect(null, {login})(LoginPage);