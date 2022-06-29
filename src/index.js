import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer.js'
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({ reducer: rootReducer })

root.render(
  <Provider store={store}>
      <App />
  </Provider>
  
);