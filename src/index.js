import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import register from './registerServiceWorker';

let mount = document.getElementById('root');

ReactDOM.render(<App />, mount);
register();
