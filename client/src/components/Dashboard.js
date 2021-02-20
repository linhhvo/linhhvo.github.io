import React from 'react';
import classes from './Dashboard.module.css';
import {Profile} from './ProfilePanel/Profile';
import {Projects} from './Projects/Projects';

export const Dashboard = () => {
  return (
    <div className={classes.container}>
      <Profile />
      <Projects />
    </div>

  );
};