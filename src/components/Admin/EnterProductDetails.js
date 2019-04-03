import React from 'react';
import UploadImageFile from './UploadImageFile';

const EnterProductDetails = (props) => {

        console.log(props)
    
        return(
            // Shop must copy kijiji
            <div>
                
                <label>NAME: </label>
                <input type="text" 
                       name="name" 
                       onChange={ (e) => { props.setValue(e) }}
                       value = { props.getValue.name }
                />
                
                <label>BRAND</label>
                <input 
                    type="text" 
                    name="brand" 
                    onChange={ (e) => { props.setValue(e) }}
                    value = { props.getValue.brand }    
                />

                <label>MODEL</label>
                <input 
                    type="text" 
                    name="model" 
                    onChange={ (e) => { props.setValue(e) }}
                    value = { props.getValue.model }
                />

                <label>PRICE</label>
                <input 
                    type="number" 
                    name="price" 
                    onChange={ (e) => { props.setValue(e) }}
                    value = { props.getValue.price }
                />

                <label>DESCRIPTION</label>
                <textarea 
                    name="description" 
                    onChange={ (e) => { props.setValue(e) }}
                    value = { props.getValue.description }    
                />
                
                
                {/* 
                    <label>Photo Upload(multi)</label>
                    <input type="file" />
                */}
                <div>
                    <UploadImageFile 
                        onChange={ (e) => { props.setValue(e) }}
                        value = { props.getValue.name }
                    />
                </div>

            </div>
        );
    
}

export default EnterProductDetails;