//reducer is just a function which takes actions from api.js and returns state
import {combineReducers} from 'redux';
import user from './reducers/user';

export default combineReducers(

        user

       
  
);