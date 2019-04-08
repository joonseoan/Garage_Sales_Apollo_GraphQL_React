import React from 'react';
import './ShowImage.css';

const ShowImage = props => {
    console.log(props.imageUrl)
    return (
        <div
            className="image"
            style={{
                backgroundImage: `url('${props.imageUrl}')`,
                backgroundSize: props.contain ? 'contain' : 'cover',
                backgroundPosition: props.left ? 'left' : 'center'
            }}
        />
    );
}

export default ShowImage;

