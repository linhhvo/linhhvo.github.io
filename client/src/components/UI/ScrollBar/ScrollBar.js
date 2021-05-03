import React from 'react';
import {Scrollbars} from 'rc-scrollbars';
import css from './ScrollBar.module.css';

export const ScrollBar = (props) => {
    return (
        <Scrollbars
            classes={{
                root: css.root
            }}
            autoHide
        >
            {props.children}
        </Scrollbars>
    );
};
