import React from 'react';

const UploadImageFile = (props) => {
    //console.log(props.getValue.name)
    // must have css in terms of props.getValues
    return (
        <div>
            <label htmlFor="imageFile" />
            <input 
                type="file" 
                name="imagePath" 
                id="imageFile" 
                // value={ props.getValues.name }
                onChange={ (e) => { props.setValues(null, e) } } 
            />
        </div>
    );
}

export default UploadImageFile;