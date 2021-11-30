import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import {addPost} from './redux/state.js';



export let renderEntireTree =(state) => {

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App stateData={state} addPost={addPost} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
}



