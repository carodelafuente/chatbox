import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';


const wrapper = document.getElementById("app-wrapper");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

