import React from 'react';
import classes from './Dashboard.module.css';
import {Profile} from './Profile';

export const Dashboard = () => {
  return (
    <div className={classes.container}>
      <Profile />
    </div>

  );
};