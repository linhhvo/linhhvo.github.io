import React from 'react';
import classes from './Skills.module.css';
import {ReactIcon} from '../Icons/ReactIcon';
import {Node} from '../Icons/Node';
import {Bootstrap} from '../Icons/Bootstrap';
import {MongoDB} from '../Icons/MongoDB';

export const Skills = () => {
  return (
    <div className={classes.container}>
      <ReactIcon />
      <Bootstrap />
      <MongoDB />
      <Node />
    </div>
  );
};
