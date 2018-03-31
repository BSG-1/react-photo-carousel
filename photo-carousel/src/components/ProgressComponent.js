import React from 'react';

//stateless export
export const ProgressComponent = (props) => {
    const {currentIndex, numberOfimages} =  props;
    return (
        <div>
            <p>You are viewing {currentIndex} of {numberOfimages}</p>
        </div>
    )
}