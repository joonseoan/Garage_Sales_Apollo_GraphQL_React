import React from 'react';
import UploadImageFile from './UploadImageFile';

const EnterProductDetails = props => {

    const INPUTS = [ 
        { label: 'NAME', inputName: "name", value: props.getValues.name },
        { label: 'BRAND', inputName: "brand", value: props.getValues.barnd },
        { label: 'MODEL', inputName: "model", value: props.getValues.model },
        { label: 'PRICE', inputName: "price", value: props.getValues.price }
    ];
    
    return(
        <React.Fragment>{ INPUTS.map(item => {
                return(
                    <div key={ item.inputName }>
                        <label>{ item.label }: </label>
                        <input type={ item.inputName === 'price' ? "number" : "text" }
                                name={ item.inputName }
                                onChange={ e => { props.setValues(null, e); } }
                                value = { item.value }
                        />    
                    </div>
                );
            }) }
            <div>
                <label>DESCRIPTION: </label>
                <textarea 
                    name="description" 
                    onChange={ (e) => { props.setValues(null, e) } }
                    value={ props.getValues.description }    
                />
            </div>
            
            <UploadImageFile 
                setValues={ props.setValues }
                getValues={ props.getValues.imagePath }
            />
        </React.Fragment>);   
}

export default EnterProductDetails;