import React from 'react';
import classes from './Dashboard.module.css';
import {Projects} from './Projects/Projects';
import {ShowMore} from './Icons/ShowMore';

export const Dashboard = () => {
    return (
        <div className={classes.container}>
            <Projects />
            <div className={classes.arrow}>
                <ShowMore />
            </div>
        </div>

    );
};