import React, {useContext} from 'react';
import classes from './FilterList.module.css';
import {GlobalContext} from '../../../../context/GlobalState';

export const FilterList = () => {
    const {allProjects, filterProjects, filterDropDown, toggleFilterList} = useContext(GlobalContext);

    let skills = new Set();

    allProjects.forEach(project => {
        project.skill.forEach(skill => skills.add(skill));
    });

    let styleClass = filterDropDown ? `${classes.container}` : `${classes.container} ${classes.collapsed}`;

    const skillClickHandler = (e) => {
        toggleFilterList();

        console.log(e.target.innerText);
        filterProjects(`skill=${e.target.innerText}`);
    };

    return (
        <div className={styleClass}>
            <ul>
                {[...skills].sort().map(skill =>
                    <li onClick={skillClickHandler} key={skill}>{skill}</li>
                )}
            </ul>
        </div>
    );
};
