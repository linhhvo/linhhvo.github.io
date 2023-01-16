import React, {useEffect} from 'react';
import './App.css';
import ReactGA from "react-ga4";

import {Background} from './components/Background';
import {Dashboard} from './components/Dashboard';
import {SocialIcons} from './components/icons/SocialIcons';
import {SkillIcons} from './components/icons/SkillIcons';
import {Profile} from './components/ProfilePanel/Profile';
import {HamburgerMenu} from './components/UI/HamburgerMenu/HamburgerMenu';

function App () {
    useEffect(() => {
        ReactGA.initialize("G-MFKGZ88EBG");
        ReactGA.send("pageview");
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