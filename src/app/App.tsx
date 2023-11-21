import React from 'react';
import Сonverter from '../components/Сonverter'
import classes from './App.module.scss'
const App = () => {
  return (
    <div className={classes.App}>
      <h1>cryptocurrency converter</h1>
      <Сonverter/>
    </div>
  );
};

export default App;