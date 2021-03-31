import React, {Fragment} from 'react';
import './App.css';

import {Background} from './components/Background';
import {Dashboard} from './components/Dashboard';
import {SocialIcons} from './components/Icons/SocialIcons';
import {SkillIcons} from './components/Icons/SkillIcons';
import {Profile} from './components/ProfilePanel/Profile';
import {HamburgerMenu} from './components/UI/HamburgerMenu/HamburgerMenu';

function App () {
    const smallScreen = window.matchMedia('(max-width: 650px)');
    let hamburger = smallScreen.matches ? <HamburgerMenu /> : null;

    return (
        <div className='container'>
            <SocialIcons />
            <SkillIcons />
            <Background />
            {hamburger}
            <Profile />
            <Dashboard />
        </div>

    );
}

export default App;