import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './reducer.js'
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer)

root.render(
  <Provider store={store}>
      <App />
  </Provider>
  
);