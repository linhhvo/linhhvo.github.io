import React from 'react';
import classes from './FilterBar.module.css';

import {DropDown} from '../../../Icons/DropDown';
import {FilterList} from './FilterList';

export const FilterBar = () => {
    // const ref = React.useRef();
    const [expandList, setexpandList] = React.useState(false);

    const onClick = () => {
        // ref.current.classList.toggle(`${classes.collapsed}`);
        setexpandList(!expandList);
    };

    return (
        <div className={classes.container}>
            <button className={classes.filterBtn} onClick={onClick} aria-label="dropdown-filter">Filter by <DropDown expandList={expandList} /></button>

            <FilterList expandList={expandList} />
        </div>
    );
};
