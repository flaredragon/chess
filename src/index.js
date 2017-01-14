import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import chessApp from './reducers';
import App from './components/app';

let store = createStore(chessApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
