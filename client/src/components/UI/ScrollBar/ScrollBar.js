import React from 'react';
import {Scrollbars} from 'rc-scrollbars';
import css from './ScrollBar.module.css';

export const ScrollBar = (props) => {

    const thumbVertical = ({style, ...props}) => {
        const finalStyle = {
            ...style,
            backgroundColor: 'rgba(127, 148, 185, 0.53)',
            width: '7px'
        };
        return <div style={finalStyle} {...props} />;
    };

    return (
        <Scrollbars
            // style={{height: '90vh'}}
            classes={{root: css.root}}
            renderThumbVertical={thumbVertical}
            autoHide
        >
            {props.children}
        </Scrollbars>
    );
};
