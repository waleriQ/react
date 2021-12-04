import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state.js';



let renderEntireTree = () => {
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App stateData={store.getState()} addPost={store.addPost.bind(store)} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

}
renderEntireTree(store.getState());

store.subscribe (renderEntireTree);