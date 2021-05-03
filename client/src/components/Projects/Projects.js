import React, {useState, useEffect, useRef, useContext} from 'react';
import classes from './Projects.module.css';
import {ScrollBar} from '../UI/ScrollBar/ScrollBar';
import {ShowMore} from '../icons/ShowMore';
import {Header} from './Header/Header';
import {Project} from './Project';
import {GlobalContext} from '../../context/GlobalState';

export const Projects = () => {
    // Retrieve list of projects
    const {displayedProjects, getProjects} = useContext(GlobalContext);

    // Set up state to update container height if resize
    const [clientHeight, setClientHeight] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);

    // Set up reference for projects container
    const ref = useRef(null);

    const updateHeight = () => {
        setClientHeight(ref.current.clientHeight);
        setScrollHeight(ref.current.scrollHeight);
    };

    useEffect(() => {
        getProjects();

        window.addEventListener('resize', updateHeight);

        return () => window.removeEventListener('resize', updateHeight);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            <ScrollBar>
                <div className={classes.projectsContainer} ref={ref} id='projects'>
                    <Header />

                    {displayedProjects.map(project => <Project key={project._id} project={project} reloadParent={updateHeight} />)}

                    <div className={classes.lastRow}></div>
                </div>
            </ScrollBar>
            <div className={classes.arrow}>
                {scrollHeight > clientHeight ? <ShowMore /> : null}
            </div>

        </React.Fragment>
    );
};
