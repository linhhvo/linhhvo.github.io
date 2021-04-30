import React, {useContext} from 'react';
import classes from './FilterBar.module.css';
import {GlobalContext} from '../../../../context/GlobalState';
import {DropDown} from '../../../Icons/DropDown';
import {FilterList} from './FilterList';

export const FilterBar = () => {
    const {toggleFilterList} = useContext(GlobalContext);

    return (
        <div className={classes.container}>
            <button className={classes.filterBtn} onClick={() => toggleFilterList()} aria-label="dropdown-filter">Filter by <DropDown /></button>

            <FilterList />
        </div>
    );
};
