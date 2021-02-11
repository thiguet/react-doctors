import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(React.createElement(App), document.getElementsByTagName('main')[0]);

if (module && module.hot) module.hot.accept();
