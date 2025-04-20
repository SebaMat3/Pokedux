//src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
//import { pokemonsReducer } from './reducers/pokemons';
import { rootReducers } from './reducers';

import { 
  compose,
  applyMiddleware,
  legacy_createStore as createStore
} from 'redux';
import './index.css';
import { logger } from './middlewares';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(
  //pokemonsReducer,
  rootReducers,
  composedEnhancers
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

