import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots.js';
import CardList from './CardList.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
