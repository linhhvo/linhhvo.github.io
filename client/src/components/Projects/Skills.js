import React from 'react';
import classes from './Skills.module.css';

export const Skills = (props) => {
    return (
        <div className={classes.container}>

            {props.skillList.map(skill => (
                <svg key={`${skill}-icon`}>
                    <use href={`#${skill}`} />
                </svg>
            ))}

        </div>
    );
};
