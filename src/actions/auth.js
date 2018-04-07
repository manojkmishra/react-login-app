import {USER_LOGGED_IN} from '../types';
import api from '../api';

export const userLoggedIn=user=>
({  // console.log('/src/auth.js=credentials-',credentials);
types:USER_LOGGED_IN, user
});

//thunk actions
export const login = credentials=>dispatch=>
    api.user.login(credentials).then(user=>dispatch(userLoggedIn(user)));
      
    