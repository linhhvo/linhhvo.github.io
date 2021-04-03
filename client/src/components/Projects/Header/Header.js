import React from 'react';
import classes from './Header.module.css';
import {FilterBar} from './FilterBar/FilterBar';

export const Header = () => {
  return (
    <div className={classes.container}>
      <h1>Projects</h1>

      <FilterBar />
    </div>
  );
};
