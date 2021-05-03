import React, {useEffect} from 'react';
import classes from './Project.module.css';
// import thumbnail from '../../assets/Thumbnails';
import {Skills} from './Skills';
import {Button} from '../UI/Button/Button';

export const Project = ({project, reloadParent}) => {
    useEffect(() => {reloadParent();}, []);

    const imagePath = process.env.PUBLIC_URL + '/assets/Thumbnails/';

    return (
        <div className={classes.container}>
            <img src={imagePath + project.thumbnail + '.png'} alt={`thumbnail for ${project.name}`} />

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
