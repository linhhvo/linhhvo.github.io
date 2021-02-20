import React from 'react';

import classes from './Profile.module.css';
import profile_pic from '../../assets/profile.png';

import {Github} from '../Icons/Github';
import {Linkedin} from '../Icons/Linkedin';
import {Email} from '../Icons/Email';
import {ThemeSwitch} from '../Icons/ThemeSwitch';
import {Social} from './Social';

export const Profile = () => {
  return (
    <div className={classes.container}>

      <div>
        <img className={classes.profilePic} src={profile_pic} alt="an illustration of myself" width="130px" height="130px" />
        <p className={classes.name}>Linh Vo</p>
        <div className={classes.iconContainer}>
          <Social icon={<Github />} text='Github' />
          <Social icon={<Linkedin />} text='Linkedin' />
          <Social icon={<Email />} text='Email' />
        </div>
      </div>

      <div className={classes.themeSwitch}>
        <ThemeSwitch />
        <p>Enable light mode </p>
      </div>

    </div>
  );
};
