import React from 'react';
import LoginForm from '../forms/LoginForm';

class LoginPage extends React.Component
{
  submit=data=>
  {
   console.log('/src/comp/pages/loginpage-data',data)
  };
  
  render()
  { 
    return(  <div> <h1>Login Page</h1>{console.log('/src/components/Pages/LoginPage.js-inside render')}
             <LoginForm submit={this.submit}/>
             </div>
          );
   
  }
}

export default LoginPage;