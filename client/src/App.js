import React, {Fragment} from 'react';
import './App.css';

import {Background} from './components/Background';
import {Dashboard} from './components/Dashboard';
import {SocialIcons} from './components/Icons/SocialIcons';
import {SkillIcons} from './components/Icons/SkillIcons';
import {Profile} from './components/ProfilePanel/Profile';
import {HamburgerMenu} from './components/UI/HamburgerMenu/HamburgerMenu';

function App () {
    return (
        <div className='container'>
            <SocialIcons />
            <SkillIcons />
            <Background />
            <HamburgerMenu />
            <Profile />
            <Dashboard />
        </div>

    );
}

export default App;