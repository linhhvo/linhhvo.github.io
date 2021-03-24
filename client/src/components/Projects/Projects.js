import React, {useState, useEffect, useRef} from 'react';
import classes from './Projects.module.css';
import {ScrollBar} from '../UI/ScrollBar/ScrollBar';
import {Header} from './Header/Header';
import {Project} from './Project';

export const Projects = () => {
    const [clientHeight, setclientHeight] = useState(0);
    const [scrollHeight, setscrollHeight] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        setclientHeight(ref.current.clientHeight);
        setscrollHeight(ref.current.scrollHeight);
    });

    // console.log(clientHeight);
    // console.log(scrollHeight);

    return (
        <ScrollBar>
            <div className={classes.projectsContainer} ref={ref}>
                <Header />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <div className={classes.lastRow}></div>
            </div>
        </ScrollBar>

    );
};
