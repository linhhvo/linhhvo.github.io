import React from 'react';
import classes from './Project.module.css';
import thumbnail from '../../assets/thumbnail.png';
import {Skills} from './Skills';
import {Button} from '../UI/Button/Button';

export const Project = () => {
  return (
    <div className={classes.container}>
      <img src={thumbnail} alt='thumbnail for project name' />

      <div className={classes.detailsContainer}>
        <h2>Project name</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        <Skills />
      </div>

      <div className={classes.btnContainer}>
        <Button text='view demo' />
        <Button text='source code' />
      </div>

    </div>
  );
};
