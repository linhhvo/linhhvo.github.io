import React from 'react';
import classes from './Social.module.css';

export const Social = (props) => {
  return (
    <div className={classes.container}>
      {props.icon}
      <p>{props.text}</p>
    </div>
  );
};
