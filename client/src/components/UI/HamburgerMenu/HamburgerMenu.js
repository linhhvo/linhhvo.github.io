import React, {useState} from 'react';
import classes from './HamburgerMenu.module.css';

export const HamburgerMenu = () => {
  const [active, setActive] = useState('false');

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={active ? classes.hamburger : classes.hamburger + ' ' + classes.isActive} onClick={handleClick}>
      <div className={classes.hamburgerBox}>
        <div className={classes.hamburgerInner}></div>
      </div>
    </div>
  );
};
