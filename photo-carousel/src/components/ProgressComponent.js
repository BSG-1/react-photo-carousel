import React from 'react';

//stateless export
export const ProgressComponent = (props) => {
    const {currentIndex, numberOfImages} =  props;
    return (
        <div>
            <p>You are viewing {currentIndex} of {numberOfImages}</p>
        </div>
    )
}