import React, {useState, useContext} from 'react';
import classes from './HamburgerMenu.module.css';
import {GlobalContext} from '../../../context/GlobalState';

export const HamburgerMenu = () => {
    const [active, setActive] = useState(false);
    const {toggleProfilePanel} = useContext(GlobalContext);

    const handleClick = () => {
        setActive(!active);
        toggleProfilePanel();
    };

    return (
        <div className={active ? classes.hamburger + ' ' + classes.isActive : classes.hamburger} onClick={handleClick}>
            <div className={classes.hamburgerBox}>
                <div className={classes.hamburgerInner}></div>
            </div>
        </div>
    );
};
