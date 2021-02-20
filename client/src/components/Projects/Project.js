import React from 'react';
import classes from './Project.module.css';
import thumbnail from '../../assets/thumbnail.png';
import {Skills} from './Skills';
import {Button} from '../../utilities/Button';

export const Project = () => {
  return (
    <div className={classes.container}>
      <img src={thumbnail} alt='thumbnail for project name' width='135px' height='135px' />

      <h2>Project name</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

      <Skills />

      <div>
        <Button text='view demo' />
        <Button text='source code' />
      </div>

    </div>
  );
};
