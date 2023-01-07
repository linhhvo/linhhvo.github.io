import React from 'react';
import classes from './Dashboard.module.css';
import {Experiences} from './Experiences/Experiences';
import {Projects} from './Projects/Projects';
import {ScrollBar} from './UI/ScrollBar/ScrollBar';

export const Dashboard = () => {
    return (
        <React.Fragment>
            <ScrollBar>
                <div className={classes.container}>
                    {/* <Experiences /> */}
                    <Projects />
                </div>
            </ScrollBar>
        </React.Fragment>


    );
};