import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import styles from './index.css';

render(
  <App className={styles}/>,
  document.getElementById('root')
);
