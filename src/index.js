import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// The root of the app
const rootEl = document.getElementById('root');

// Rendering the root
let render = () => {
  ReactDOM.render(<App />, rootEl);
};

// Hot Module Replacement (HMR) -> updates without refreshing
if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render);
  });
}

// Calls to render.
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
