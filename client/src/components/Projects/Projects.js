import React from 'react';
import classes from './Projects.module.css';
import {ScrollBar} from '../UI/ScrollBar/ScrollBar';
import {Header} from './Header/Header';
import {Project} from './Project';

export const Projects = () => {
    return (
        <ScrollBar>
            <div className={classes.projectsContainer}>
                <Header />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <div className={classes.lastRow}></div>
            </div>
        </ScrollBar>

    );
};
