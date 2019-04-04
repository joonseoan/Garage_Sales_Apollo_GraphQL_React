import React from 'react';
import UploadImageFile from './UploadImageFile';

const EnterProductDetails = props => {

    const INPUTS = [ 
        { label: 'NAME', inputName: "name", value: props.getValue.name },
        { label: 'BRAND', inputName: "brand", value: props.getValue.barnd },
        { label: 'MODEL', inputName: "model", value: props.getValue.model },
        { label: 'PRICE', inputName: "price", value: props.getValue.price }
    ];
    
    return(
        <div>{ INPUTS.map(item => {
                return(
                    <div key={ item.inputName }>
                        <label>{ item.label }: </label>
                        <input type={ item.inputName === 'price' ? "number" : "text" }
                                name={ item.inputName }
                                onChange={ e => { props.setValue(null, e ); } }
                                value = { item.value }
                        />    
                    </div>
                );
            }) }
            <div>
                <label>DESCRIPTION: </label>
                <textarea 
                    name="description" 
                    onChange={ (e) => { props.setValue(null, e) } }
                    value={ props.getValue.description }    
                />
            </div>
            <div>
                <UploadImageFile 
                    setValue={ props.setValue }
                    // getValue={ props.getValue.imagePath.name }
                />
            </div>
        </div>);   
}

export default EnterProductDetails;