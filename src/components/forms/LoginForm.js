import React from 'react';
import {Form,Button, Message} from 'semantic-ui-react';
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
    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
          this.setState({ loading: true });
          this.props
            .submit(this.state.data)
            .catch(err =>
              this.setState({ errors: err.response.data.errors, loading: false })
            );
        }
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
    {   const {data, errors}=this.state;
        return( <Form onSubmit={this.onSubmit}> 
                {errors.global && (<Message negative>
                                     <Message.Header>Something went wrong</Message.Header>
                                     <p>{errors.global}</p>
                                   </Message>
                 )}
                   <Form.Field error={!!errors.email}>
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" placeholder="example@example.com" value={data.email} onChange={this.onChange}/>
                      {errors.email && <InlineError text={errors.email} />}
                    </Form.Field>
                 
                    <Form.Field error={!!errors.password}>
                      <label htmlFor="passowrd">Password</label>
                      <input type="password" id="password" name="password" placeholder="make it secure" value={data.password} onChange={this.onChange}/>
                      {errors.password && <InlineError text={errors.password} />}
                    </Form.Field>
                   <Button>Login</Button>
                </Form>
                    );
            }
   
}

export default LoginForm;