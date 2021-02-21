import React from 'react';

import classes from './Profile.module.css';
import profile_pic from '../../assets/profile.png';

import {ThemeSwitch} from '../Icons/ThemeSwitch';
import {Social} from './Social';

export const Profile = () => {
  return (
    <div className={classes.container}>

      <div>
        <img className={classes.profilePic} src={profile_pic} alt="an illustration of myself" width="130px" height="130px" />
        <p className={classes.name}>Linh Vo</p>
        <div className={classes.iconContainer}>
          <Social name='Github' />
          <Social name='Linkedin' />
          <Social name='Email' />
        </div>
      </div>

      <div className={classes.themeSwitch}>
        <ThemeSwitch />
        <p>Enable light mode </p>
      </div>

    </div>
  );
};
