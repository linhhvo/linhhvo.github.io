import React from 'react';
import classes from './FilterBar.module.css';

import {DropDown} from '../../../Icons/DropDown';
import {FilterList} from './FilterList';

export const FilterBar = () => {
    return (
        <div className={classes.container}>
            <button className={classes.filterBtn} aria-label="dropdown-filter">Filter by <DropDown /></button>

            <FilterList />
        </div>
    );
};
