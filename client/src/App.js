import React, {Fragment} from 'react';
import './App.css';

import {Background} from './components/Background';
import {Dashboard} from './components/Dashboard';
import {SocialIcons} from './components/Icons/SocialIcons';
import {SkillIcons} from './components/Icons/SkillIcons';


function App () {
  return (
    <div className='container dark'>
      <SocialIcons />
      <SkillIcons />
      <Background />
      <Dashboard />
    </div>

  );
}

export default App;