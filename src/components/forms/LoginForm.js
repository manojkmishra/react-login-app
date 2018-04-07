import React from 'react';
import {Form,Button} from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component 
{
    state=
    {   data:{email: '', password: ''},
        loading: false,
        errors:{}
    };
    onChange=e=>this.setState({ data:{...this.state.data, [e.target.name]:e.target.value}});
    onSubmit=()=>
     { const errors=this.validate(this.state.data);
        this.setState({errors});
     };
    validate=(data)=>
     { const errors = {};
      console.log('/src/components/forms/LoginForm.js-validate-data=',data)
      if(!Validator.isEmail(data.email)) errors.email = "Invalid Email";
      if(!data.password) errors.password="cant be blank";
      
      console.log('/src/components/forms/LoginForm.js-validate-errors=',errors)
      return errors;

     } 
    render()
    {   const {data}=this.state;
        return( <Form onSubmit={this.onSubmit}> {console.log('/src/components/forms/LoginForm.js-inside render-Form')}
                   <Form.Field>
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" placeholder="example@example.com" value={data.email} onChange={this.onChange}/>
                      <label htmlFor="passowrd">Password</label>
                      <input type="password" id="password" name="password" placeholder="make it secure" value={data.password} onChange={this.onChange}/>
                    </Form.Field>
                   <Button>Login</Button>
                </Form>
                    );
            }
   
}

export default LoginForm;