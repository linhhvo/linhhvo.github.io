import React, {useContext} from 'react';

import classes from './Profile.module.css';
import profile_pic from '../../assets/profile.png';

import {ThemeSwitch} from '../Icons/ThemeSwitch';
import {Social} from './Social';

import {GlobalContext} from '../../context/GlobalState';

export const Profile = () => {
    const {switchTheme} = useContext(GlobalContext);

    return (
        <div className={classes.container + ' ' + classes.active}>
            <div className={classes.burgerContainer} />
            <div className={classes.subContainer}>
                <img className={classes.profilePic} src={profile_pic} alt="an illustration of myself" />
                <p className={classes.name}>Linh Vo</p>
                <div className={classes.iconContainer}>
                    <Social name='Github' />
                    <Social name='Linkedin' />
                    <Social name='Email' />
                    <Social name='Resume' />
                </div>
            </div>

            <div className={classes.themeSwitch}>
                <ThemeSwitch toggle={() => switchTheme()} />
                <p>Enable light mode </p>
            </div>

        </div>
    );
};
