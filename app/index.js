// entry-point
import 'ress/ress.css';
import React from 'react';
import { render } from 'react-dom';

import './bootstrap';

import App from './components/app';

if(process.env.NODE_ENV === 'development'){
  console.log('%cDevelopment --------->', 'color:#ff8189;background:#3f3f3f;font-weight:bold;font-size:20px;padding:.25em;');
}
const root = document.getElementById('root');

render(<App />, root);
