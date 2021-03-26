import React from 'react';
import classes from './FilterList.module.css';

export const FilterList = (props) => {
    let styleClass = props.expandList ? `${classes.container}` : `${classes.container} ${classes.collapsed}`;

    return (
        <div className={styleClass}>
            <ul>
                <li>Show All</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>Python</li>
                <li>Bootstrap</li>
            </ul>
        </div>
    );
};
