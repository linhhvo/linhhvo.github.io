import React from 'react';
import classes from './Dashboard.module.css';
import profile_pic from '../assets/profile.png';

export const Dashboard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <img className={classes.profilePic} src={profile_pic} alt="an illustration of myself" width="130px" height="130px" />
        <p>Linh Vo</p>

        <div className={classes.mode}></div>
      </div>
    </div>

  );
};