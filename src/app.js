import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/style.scss';

import rootReducer from './reducers/rootReducer';

import MainApp from './components/MainApp';

const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const appRoot = document.querySelector('#root');
ReactDOM.render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  appRoot
);
