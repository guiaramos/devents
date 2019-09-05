import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// The root of the app
const rootEl = document.getElementById('root');

// Rendering the root
let render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootEl
  );
};

// Hot Module Replacement (HMR) -> updates without refreshing
if (module.hot) {
  module.hot.accept('./Pages/App', () => {
    setTimeout(render);
  });
}

// Calls to render.
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
