import React from 'react';
import classes from './Dashboard.module.css';
import {Projects} from './Projects/Projects';
import {ArrowDown} from './Icons/ArrowDown';

export const Dashboard = () => {
    return (
        <div className={classes.container}>
            <Projects />
            <div className={classes.arrow}>
                <ArrowDown />
            </div>
        </div>

    );
};