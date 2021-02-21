import React from 'react';
import classes from './Social.module.css';

export const Social = (props) => {
  return (
    <div className={classes.container}>
      <svg>
        <use href={`#${props.name}`} />
      </svg>
      <p>{props.name}</p>
    </div>
  );
};
