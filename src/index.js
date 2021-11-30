import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state.js';
import {addPost} from './redux/state.js';
import {renderEntireTree} from './render.js';


renderEntireTree (state);


