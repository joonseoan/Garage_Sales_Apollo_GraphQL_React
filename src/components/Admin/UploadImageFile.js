import React from 'react';

const UploadImageFile = (props) => {
    //console.log(props.getValue.name)

    return (
        <React.Fragment>
            <label htmlFor="imageFile" />
            <input 
                type="file" 
                name="imagePath" 
                id="imageFile" 
                // value={ props.getValue }
                onChange={ (e) => { props.setValue(null, e) } } 
            />
        </React.Fragment>
    );
    
}

export default UploadImageFile;