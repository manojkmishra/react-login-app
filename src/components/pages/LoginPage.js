import React from 'react';
import LoginForm from '../forms/LoginForm';


const LoginPage=()=>
(   <div> <h1>Login Page</h1>{console.log('/src/components/Pages/LoginPage.js-inside render')}
      <LoginForm />
    </div>
);

export default LoginPage;