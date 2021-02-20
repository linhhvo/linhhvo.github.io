import React from 'react';
import classes from './Projects.module.css';

import {Header} from './Header/Header';
import {Project} from './Project';

export const Projects = () => {
  return (
    <div className={classes.container}>
      <Header />

      <Project />
      <Project />
      <Project />
    </div>
  );
};
