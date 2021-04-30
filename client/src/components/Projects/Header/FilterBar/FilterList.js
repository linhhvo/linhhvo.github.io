import React, {useContext} from 'react';
import classes from './FilterList.module.css';
import {GlobalContext} from '../../../../context/GlobalState';

export const FilterList = (props) => {
    const {projects} = useContext(GlobalContext);

    let skills = new Set();

    projects.map(project => {
        project.skill.map(skill => skills.add(skill));
    });

    let styleClass = props.expandList ? `${classes.container}` : `${classes.container} ${classes.collapsed}`;

    return (
        <div className={styleClass}>
            <ul>
                {[...skills].sort().map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </div>
    );
};
