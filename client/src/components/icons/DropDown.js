import React from 'react';

export const DropDown = (props) => {
    let styles = props.expandList ? {transform: `rotate(180deg)`} : null;
    return (
        <svg style={styles} viewBox="0 0 24 15">
            <path d="M.033 2.857L2.862.027l9.175 9.339 9.167-9.34 2.829 2.83-11.996 12.17z" />
        </svg>

    );
};
