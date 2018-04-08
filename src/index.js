import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'; //css
import {createStore, applyMiddleware} from 'redux'; //for store and middleware things of redux
import {Provider} from 'react-redux'; //connection bw react and redux
import thunk from 'redux-thunk'; //for async request to server and actions
import rootReducer from "./rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension';




const store=createStore( rootReducer , composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(  <BrowserRouter> 
                  <Provider store={store}><App /></Provider>
                  </BrowserRouter>, 
                  document.getElementById('root')
               );
registerServiceWorker();
