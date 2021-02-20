import React from 'react';
import classes from './FilterList.module.css';

export const FilterList = () => {
  return (
    <div className={classes.container}>
      <ul>
        <li>Show All</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Sass</li>
        <li>Bootstrap</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>API</li>
      </ul>
    </div>
  );
};
