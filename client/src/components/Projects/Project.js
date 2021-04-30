import React from 'react';
import classes from './Project.module.css';
import thumbnail from '../../assets/thumbnail.png';
import {Skills} from './Skills';
import {Button} from '../UI/Button/Button';

export const Project = ({project}) => {
    return (
        <div className={classes.container}>
            <img src={thumbnail} alt='thumbnail for project name' />

            <div className={classes.detailsContainer}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <Skills skillList={project.skill} />
            </div>

            <div className={classes.btnContainer}>
                <Button text='view demo' onClick={() => window.open(project.demo)} />
                <Button text='source code' onClick={() => window.open(project.sourceCode)} />
            </div>

        </div>
    );
};
