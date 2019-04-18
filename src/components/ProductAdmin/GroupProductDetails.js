import React from 'react';

import SelectCategory from './SelectCategory';
import EnterProductDetails from './EnterProductDetails';

const GroupProductDetails = props => {
    const onChangeHandler = (e, categoryValue) => {
        if(categoryValue) {
            const { name,  value } = categoryValue;
            props.setValues(name, value);
        } else {
            const { name, value, files } = e.target;
            if(name === 'imagePaths') {               
                if(window.File && window.FileList && window.FileReader) {
                    const images = Object.values(files);
                    props.setValues('imagePaths', [ ...images ]);
                    images.forEach(image => {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            props.setValues('imagePreviews', reader.result);
                        }
                        reader.readAsDataURL(image);
                    });
                } else {
                    throw new Error('Your browser does not support file API');
                }
            } else {
                props.setValues(name, value);
            }
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