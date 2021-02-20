import React from 'react';
import classes from './FilterBar.module.css';

import {ArrowDown} from '../../../Icons/ArrowDown';
import {FilterList} from './FilterList';

export const FilterBar = () => {
  return (
    <div className={classes.container}>
      <button className={classes.filterBtn} aria-label="dropdown-filter">Filter by <ArrowDown /></button>

      <FilterList />
    </div>
  );
};
