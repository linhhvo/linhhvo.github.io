import React, {useContext} from 'react';
import classes from './FilterList.module.css';
import {GlobalContext} from '../../../../context/GlobalState';

export const FilterList = () => {
    const {allProjects, filterProjects, filterDropDown, toggleFilterList, getProjects} = useContext(GlobalContext);

    let skills = new Set();

    allProjects.forEach(project => {
        project.skill.forEach(skill => skills.add(skill));
    });

    let categories = new Set();

    allProjects.forEach(project => categories.add(project.category));

    let styleClass = filterDropDown ? `${classes.container}` : `${classes.container} ${classes.collapsed}`;

    return (
        <div className={styleClass} onClick={toggleFilterList}>
            <ul>
                <li onClick={() => getProjects()}>Show All</li>
                <li className={classes.disabled}>By Category</li>
                {[...categories].sort().map(category =>
                    <li onClick={(e) => filterProjects(`category=${e.target.innerText}`)} key={category}>{category}</li>
                )}

                <li className={classes.disabled}>By Skill</li>
                {[...skills].sort().map(skill =>
                    <li onClick={(e) => filterProjects(`skill=${e.target.innerText}`)} key={skill}>{skill}</li>
                )}
            </ul>
        </div>
    );
};
