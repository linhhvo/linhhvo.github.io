import React from 'react';
import classes from './Social.module.css';

export const Social = (props) => {
    return (
        <div className={classes.container} onClick={() => window.open(props.href)}>
            <svg>
                <use href={`#${props.name}`} />
            </svg>
            <p>{props.name}</p>
        </div>
    );
};
