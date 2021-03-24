import React from 'react';
import './App.css';

import {Background} from './components/Background';
import {Dashboard} from './components/Dashboard';
import {SocialIcons} from './components/Icons/SocialIcons';
import {SkillIcons} from './components/Icons/SkillIcons';
import {Profile} from './components/ProfilePanel/Profile';
import {HamburgerMenu} from './components/UI/HamburgerMenu/HamburgerMenu';
import {GlobalContext} from './context/GlobalState';


function App () {
    return (
        <div id='main' className={`container dark`}>
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