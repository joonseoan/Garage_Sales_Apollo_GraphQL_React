import React from 'react';

import SelectCategory from './SelectCategory';
import EnterProductDetails from './EnterProductDetails';
import { generateBase64FromImage } from '../../utils/imageFile';

const GroupProductDetails = props => {

    const onChangeHandler = (e, categoryValue) => {
        if(categoryValue) {
            const { name,  value } = categoryValue;
            return props.setValues(name, value);
        } else {
            const { name, value, files } = e.target;
            if(name === 'imagePath') {
                // const previews = [];
                if(window.File && window.FileList && window.FileReader) {

                    const imagePaths = Object.values(files);
        

                    
                    imagePaths.forEach(path => {
                        const reader = new FileReader();
                        reader.onloadend = (e) => {
                            props.setValues('imagePreview', reader.result);
                            // imagePreviews.concat(e.target.result.toString());
                            // this.props.setValues()
                        }
                        reader.readAsDataURL(path);
                    });


                    props.setValues("imagePath", imagePaths);

                    // this.props

                    // return generateBase64FromImage(files)
                    //     .then(b64 => {
                    //         if(!b64) {
                    //             throw new Error('Unanble to convert to b64.');
                    //         }
                    //         console.log('b64: ', b64);
                    //         // previews.push(b64);
                    //         // console.log(previews.length)
                    //         props.setValues("imagePreview", b64);
                    //     })
                    //     .catch(e => {
                    //         props.setValues("imagePreview", null);
                    //     });
                } else {
                    throw new Error('Your browser does not support file API');
                }
            }
            props.setValues(name, value);
        }
    }

    // removing object
    // 1) can use _.omit(state, 'category') => single properties by using lodash
    // 2) const newState = { ...state, imagePreview: undefined } // both
    // 3) _.pick
    // 4)
    const { category, ...noA } = props.getValues; // multiple properties

    return (
        <div>
            <SelectCategory 
                getValues = { props.getValues.category }
                setValues = { onChangeHandler }
            />
            <EnterProductDetails 
                getValues = { noA }
                setValues = { onChangeHandler }
            />
        </div>
    );

}

export default GroupProductDetails;