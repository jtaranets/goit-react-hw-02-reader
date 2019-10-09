import React from 'react';
import ReactDOM from 'react-dom';
import Reader from './components/reader';
import publications from './publications.json';
import './index.css';

ReactDOM.render(
  <Reader publications={publications} />,
  document.getElementById('root'),
);
