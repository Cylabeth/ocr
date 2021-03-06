import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <Router>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

