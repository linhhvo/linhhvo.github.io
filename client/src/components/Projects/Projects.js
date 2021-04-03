import React from 'react';
import classes from './Projects.module.css';

import {Header} from './Header/Header';
import {Project} from './Project';

export const Projects = () => {
  return (
    <div className={classes.container}>
      <Header />

      <div className={classes.projectsContainer}>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};
