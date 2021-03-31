import React from 'react';
import classes from './Dashboard.module.css';
import {Projects} from './Projects/Projects';
import {HamburgerMenu} from './UI/HamburgerMenu/HamburgerMenu';

export const Dashboard = () => {
    // const smallScreen = window.matchMedia('(max-width: 650px)');
    // let hamburger = smallScreen.matches ? <HamburgerMenu /> : null;

    return (
        <div className={classes.container}>
            {/* {hamburger} */}
            <Projects />
        </div>

    );
};