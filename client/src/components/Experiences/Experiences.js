import React from 'react';
import classes from './Experiences.module.css';

export const Experiences = () => {
    return (
        <div className={classes.experiencesContainer}>
            <h1>Work Experience</h1>
            <div className={classes.indExpContainer}>
                <div className={classes.indExpHeader}>
                    <h2>Data Scientist</h2>
                    <p>Sunovion Pharmaceuticals | Jul 2021 - Now</p>
                </div>
                <p>Tableau, Python, SQL, AWS</p>
                <div className={classes.divider}></div>

            </div>
        </div>

    );
};