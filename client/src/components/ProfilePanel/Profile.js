import React from 'react';

import classes from './Profile.module.css';
import profile_pic from '../../assets/profile.png';

import {Github} from '../Icons/Github';
import {Linkedin} from '../Icons/Linkedin';
import {Email} from '../Icons/Email';
import {ThemeLight} from '../Icons/ThemeLight';

export const Profile = () => {
  return (
    <div className={classes.container}>

      <img className={classes.profilePic} src={profile_pic} alt="an illustration of myself" width="130px" height="130px" />
      <p>Linh Vo</p>

      <div className={classes.iconContainer}>
        <Github />
        <Linkedin />
        <Email />
      </div>

      <ThemeLight />
    </div>
  );
};
