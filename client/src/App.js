import React from 'react';
import './App.css';

import {Dashboard} from './components/Dashboard';


function App () {
  return (
    <div className='App'>
      <div className="ellipse-1"></div>
      <div className="ellipse-2"></div>
      <div className='ellipse-3'></div>
      <div className='ellipse-4'></div>
      <div className='ellipse-5'></div>

      <Dashboard />

    </div>

  );
}

export default App;