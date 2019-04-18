import React from 'react';

import { productInputs } from '../../utils/inputs/inputAttributes';
import INPUTS from '../../utils/inputs/inputsForm';
import { ShowImage } from '../../utils/images/imgs';
import './EnterProductDetails.css';

const EnterProductDetails = props => {
    
    let key = 0;

    return(
        <React.Fragment>{ productInputs.map(item => {
            let type;
            if (item.inputName === 'imagePaths') {
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
                        value={ item.inputName === 'imagePaths' ? undefined : props.getValues[item.inputName] }
                        multiple={ item.inputName === 'imagePaths' ? true : false }
                    />
                </div>
            );
            }) }
            <div className="image_space">
                { !props.getValues.imagePreviews && <p>Please choose an image.</p> }
                {   
                    props.getValues.imagePreviews && 
                    props.getValues.imagePreviews.map(image =>
                         <ShowImage key={ key++ } imagePreviews={ image } contain />)
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