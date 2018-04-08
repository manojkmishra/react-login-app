import {USER_LOGGED_IN} from '../types';
import api from '../api';

export const userLoggedIn = user =>
({  type: USER_LOGGED_IN, user
});

//thunk actions
export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.bookwormJWT = user.token;
    dispatch(userLoggedIn(user));
});
      
    