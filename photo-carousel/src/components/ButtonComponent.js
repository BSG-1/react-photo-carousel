import React from 'react';

export const ButtonComponent =(props) => {
    //object constructor
    const {handleClick, label} = props;
    return(
        <div className="button-component">
            <button onClick={handleClick}>{label}</button>
        </div>
    )
}