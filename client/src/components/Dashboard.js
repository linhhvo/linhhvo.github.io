import React from 'react';
import classes from './Dashboard.module.css';
import {Projects} from './Projects/Projects';

export const Dashboard = () => {
    return (
        <div className={classes.container}>
            <Projects />
        </div>

    );
};