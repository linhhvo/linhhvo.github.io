import React, {useEffect} from 'react';
import classes from './Project.module.css';
import thumbnail from '../../assets/Thumbnails/thumbnail.png';
import {Skills} from './Skills';
import {Button} from '../UI/Button/Button';

export const Project = ({project, reloadParent}) => {
    console.log('ind project render');
    useEffect(() => {reloadParent();}, []);
    // reloadParent();
    return (
        <div className={classes.container}>
            <img src={thumbnail} alt='thumbnail for project name' />

            <div className={classes.detailsContainer}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <Skills skillList={project.skill} />
            </div>

            <div className={classes.btnContainer}>
                {project.demo ? <Button text='view demo' link={project.demo} /> : null}
                {project.sourceCode ? <Button text='source code' link={project.sourceCode} /> : null}
                {project.report ? <Button text='view report' link={project.report} /> : null}
            </div>

        </div>
    );
};
