import React, {Fragment} from 'react';
import './App.css';

import {Dashboard} from './components/Dashboard';
import {SocialIcons} from './components/Icons/SocialIcons';
import {SkillIcons} from './components/Icons/SkillIcons';


function App () {
  return (
    <Fragment>
      <SocialIcons />
      <SkillIcons />
      <div className='App'>
        <div className="ellipse-1"></div>
        <div className="ellipse-2"></div>
        <div className='ellipse-3'></div>
        <div className='ellipse-4'></div>
        <div className='ellipse-5'></div>
        <Dashboard />
      </div>
    </Fragment>

  );
}

export default App;