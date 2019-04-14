import React from 'react';

import { productInputs } from '../../utils/inputs/inputAttributes';
import INPUTS from '../../utils/inputs/inputsForm';
import ShowImage from './ShowImage';
import './EnterProductDetails.css';

const EnterProductDetails = props => {

    return(
        <React.Fragment>{ productInputs.map(item => {
            let type;
            if (item.inputName === 'imagePath') {
                type = 'file'
            } else if (item.inputName === 'price') {
                type = 'number'
            } else {
                type = 'text'
            }
            return(
                <div key={ item.inputName }>
                    <INPUTS 
                        label={ item.label }
                        type={ type }
                        name={ item.inputName }
                        setValues={ props.setValues }
                        value={ item.inputName === 'imagePath' ? undefined : props.getValues[item.inputName] }
                        multiple={ item.inputName === 'imagePath' ? true : false }
                    />
                </div>
            );
            }) }
            <div className="image_space">
                { !props.getValues.imagePreview && <p>Please choose an image.</p> }
                {
                    props.getValues.imagePreview && props.getValues.imagePreview.map(image => {
                        return  <ShowImage imageUrl={ image } contain /> })
                }
            </div>

            <div>
                <label>DESCRIPTION: </label>
                <textarea 
                    name="description" 
                    onChange={ (e) => { props.setValues(e) } }
                    value={ props.getValues.description }    
                />
            </div>
        </React.Fragment>);   
}

export default EnterProductDetails;