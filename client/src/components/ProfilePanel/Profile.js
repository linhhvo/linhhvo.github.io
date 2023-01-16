import React, {useContext} from 'react';

import classes from './Profile.module.css';
import profile_pic from '../../assets/profile.png';
import resume from '../../assets/LinhVo_Resume.pdf';

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
                    <Social name='Resume' href={resume} />
                    <Social name='Github' href='https://www.github.com/linhhvo' />
                    <Social name='Linkedin' href='https://www.linkedin.com/in/linhhvo' />
                    <Social name='Email' href='mailto: lhvo2112@gmail.com' />
                </div>
            </div>

            <div className={classes.themeSwitch}>
                <ThemeSwitch toggle={() => switchTheme()} />
                <p>Switch mode </p>
            </div>

        </div>
    );
};
