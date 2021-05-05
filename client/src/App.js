import React, {useEffect} from 'react';
import './App.css';
import ReactGA from 'react-ga';

import {Background} from './components/Background';
import {Dashboard} from './components/Dashboard';
import {SocialIcons} from './components/icons/SocialIcons';
import {SkillIcons} from './components/icons/SkillIcons';
import {Profile} from './components/ProfilePanel/Profile';
import {HamburgerMenu} from './components/UI/HamburgerMenu/HamburgerMenu';

function App () {
    useEffect(() => {
        ReactGA.initialize('UA-196419576-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    });

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