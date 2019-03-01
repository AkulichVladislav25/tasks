/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';

import Chat from './components/Chat';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Chat name="Alina Arlova" />, document.getElementById('root'));
registerServiceWorker();
