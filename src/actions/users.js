import api from "../api";
import { userLoggedIn } from "./auth";
//below is the thunk action--it will take data as input and trigger api.user.signup
//this api will take data and dispatch(userLoggedIn(user));--we want to login user after successful register
export const signup = data => dispatch =>
  api.user.signup(data).then(user => {   localStorage.bookwormJWT = user.token; dispatch(userLoggedIn(user));  });

 // localStorage.bookwormJWT = user.token; 