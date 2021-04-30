import React from 'react';
import classes from './Button.module.css';

export const Button = (props) => {
    return (
        <button className={classes.button} onClick={() => window.open(props.link)}>{props.text}</button>
    );
};
