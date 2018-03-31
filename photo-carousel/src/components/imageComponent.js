import React from 'react'

// all this is doing is HOLDING the image, no need to do class image component extend comp etc, all you have to do is export a stateless component!
export const ImageComponent = (props) => {
    return (
        <div className="image-component">
            <img src={props.imageUrl} />
        </div>
    )
}