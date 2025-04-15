import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { pokemonsReducer } from './reducers/pokemons';
import { 
  compose,
  applyMiddleware,
  legacy_createStore as createStore
} from 'redux';
import './index.css';
import { logger, featuring } from './middlewares';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnhancers = compose(
  applyMiddleware(logger, featuring),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(
  pokemonsReducer,
  composedEnhancers
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

