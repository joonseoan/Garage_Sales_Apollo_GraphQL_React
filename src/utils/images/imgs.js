import React from 'react';
import './imgs.css';

export const ShowImage = props => {
    // console.log(props.imageUrl)
    return (
        <div
            className="image"
            style={{
                backgroundImage: `url('${props.imagePreviews}')`,
                backgroundSize: props.contain ? 'contain' : 'cover',
                backgroundPosition: props.left ? 'left' : 'center'
            }}
        />
    );
}

export const ShowImageList = props => {
    return(
        <React.Fragment>
            <img
                ref={ props.imageRef } 
                src={`${ props.imagePath }`}  
                alt={ props.imagePath }
            />
        </React.Fragment>
    );
}