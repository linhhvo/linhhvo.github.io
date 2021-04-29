import React, {useState, useLayoutEffect, useRef} from 'react';
import classes from './Projects.module.css';
import {ScrollBar} from '../UI/ScrollBar/ScrollBar';
import {ShowMore} from '../Icons/ShowMore';
import {Header} from './Header/Header';
import {Project} from './Project';

export const Projects = () => {
    // Set up reference for projects container
    const ref = useRef(null);

    // Set up state to update container height if resize
    const [clientHeight, setClientHeight] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);

    useLayoutEffect(() => {
        const updateHeight = () => {
            setClientHeight(ref.current.clientHeight);
            setScrollHeight(ref.current.scrollHeight);
        };
        window.addEventListener('resize', updateHeight);

        updateHeight();

        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    // Show/hide arrow based on projects container height
    let showArrow = scrollHeight > clientHeight ? <ShowMore /> : null;

    return (
        <React.Fragment>
            <ScrollBar>
                <div className={classes.projectsContainer} ref={ref} id='projects'>
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
            <div className={classes.arrow}>
                {showArrow}
            </div>

        </React.Fragment>
    );
};
