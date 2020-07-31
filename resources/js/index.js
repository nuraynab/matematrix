import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import '../css/app.css';

if(document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
