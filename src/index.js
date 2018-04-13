//----main input file-------create store-----
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'; //css
import {createStore, applyMiddleware} from 'redux'; //for store and middleware things of redux
import {Provider} from 'react-redux'; //connection bw react and redux
import thunk from 'redux-thunk'; //for async request to server and actions
import rootReducer from "./rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import { userLoggedIn } from "./actions/auth";
import decode from "jwt-decode";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";

const store=createStore( rootReducer , composeWithDevTools(applyMiddleware(thunk)));

if (localStorage.bookwormJWT) 
{   const payload = decode(localStorage.bookwormJWT);
    const user = {token: localStorage.bookwormJWT,  email: payload.email, confirmed: payload.confirmed};
    console.log('src/index.js-send to store- user = token: localStorage.bookwormJWT=',user);
    setAuthorizationHeader(localStorage.bookwormJWT);
    store.dispatch(userLoggedIn(user));
}

//---dont touch below lines---App has to be in diff line
ReactDOM.render(  <BrowserRouter> 
                                <Provider store={store}> 
                                          <Route component={App} />
                                 </Provider> 
                   </BrowserRouter>, 
                  document.getElementById('root')
               );
registerServiceWorker();
