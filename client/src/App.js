import React, {Fragment} from 'react';
import './App.css';

import {Background} from './components/Background';
import {Dashboard} from './components/Dashboard';
import {SocialIcons} from './components/Icons/SocialIcons';
import {SkillIcons} from './components/Icons/SkillIcons';
import {Profile} from './components/ProfilePanel/Profile';
import {HamburgerMenu} from './components/UI/HamburgerMenu/HamburgerMenu';
import {GlobalProvider} from './context/GlobalState';


function App () {
    return (
        // <GlobalProvider>
        <div className='container'>
            <SocialIcons />
            <SkillIcons />
            <Background />
            <HamburgerMenu />
            <Profile />
            <Dashboard />
        </div>
        // </GlobalProvider>

    );
}

export default App;