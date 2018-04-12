//reducer is just a function which takes actions from api.js and returns state
import {combineReducers} from 'redux';
import user from './reducers/user';
import books from "./reducers/books";

export default combineReducers({  user, books   });