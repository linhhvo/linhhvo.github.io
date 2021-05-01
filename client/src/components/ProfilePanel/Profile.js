import React, {useContext} from 'react';

import classes from './Profile.module.css';
import profile_pic from '../../assets/profile.png';

import {ThemeSwitch} from '../icons/ThemeSwitch';
import {Social} from './Social';

import {GlobalContext} from '../../context/GlobalState';

export const Profile = () => {
    const {switchTheme, profileSlide} = useContext(GlobalContext);

    return (
        <div className={profileSlide ? classes.container + ' ' + classes.active : classes.container}>
            <div className={classes.burgerContainer} />
            <div className={classes.subContainer}>
                <img className={classes.profilePic} src={profile_pic} alt="an illustration of myself" />
                <p className={classes.name}>Linh Vo</p>
                <div className={classes.iconContainer}>
                    <Social name='Github' href='https://www.github.com/linhhvo' />
                    <Social name='Linkedin' href='https://www.linkedin.com/in/linhhvo' />
                    <Social name='Email' href='mailto: lhvo2112@gmail.com' />
                    <Social name='Resume' href='https://drive.google.com/file/d/1QQF0A6JmqEmBn-WC_Z4gAGgBQRfM2Tv2/view?usp=sharing' />
                </div>
            </div>

            <div className={classes.themeSwitch}>
                <ThemeSwitch toggle={() => switchTheme()} />
                <p>Enable light mode </p>
            </div>

        </div>
    );
};
