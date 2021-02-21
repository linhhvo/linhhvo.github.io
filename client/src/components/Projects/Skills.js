import React from 'react';
import classes from './Skills.module.css';

export const Skills = () => {
  return (
    <div className={classes.container}>

      {['reacticon', 'bootstrap', 'mongodb', 'node'].map(skill => (
        <svg key={`${skill}-icon`}>
          <use href={`#${skill}`} />
        </svg>
      ))}

    </div>
  );
};
