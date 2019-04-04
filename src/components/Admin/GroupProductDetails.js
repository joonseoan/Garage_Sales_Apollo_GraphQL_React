import React from 'react';

import SelectCategory from './SelectCategory';
import EnterProductDetails from './EnterProductDetails';
import { generateBase64FromImage } from '../../utils/imageFile';
import ShowImage from './ShowImage';

import './GroupProductDetail.css';

class GroupProductDetails extends React.Component {
    
    state = {
        category: '',
        name: '',
        brand: '',
        model: '',
        price: '',
        description: '',
        imagePath: '',
        imagePreview: null
    }

    onChangeHandler = (categoryValue, e) => {

        if(categoryValue) {
            return this.setState({ category: categoryValue });
        }

        const { name, value, files } = e.target;
        if(name === 'imagePath') {
            this.setState({ imagePath: files[0] });
            return generateBase64FromImage(files[0])
                .then(b64 => {
                    if(!b64) {
                        throw new Error('Unanble to convert to b64.');
                    }
                    this.setState({ imagePreview: b64 });
                })
                .catch(e => {
                    console.log(e);
                    this.setState({ imagePreview: null });
                })
        }

        this.setState({ [name]: value });
    }

    render() {

        console.log(this.state)

        // removing object
        // 1) can use _.omit(this.state, 'category') => single properties by using lodash
        // 2) const newState = { ...this.state, imagePreview: undefined } // both
        const { category, imagePreview, ...noA } = this.state; // multiple properties

        //  Creating and overring Property values
        // creating and overriding value 
        // { ...this.state, [name] : value }

        // Copying....
        // when value is an plain object and want to copy all properties
        // { ...this.state,  ...copyingOjbect }

        return (
            <div>
                <SelectCategory 
                    getValue = { this.state.category }
                    setValue = { this.onChangeHandler }
                />
                <EnterProductDetails 
                    getValue = { noA }
                    setValue = { this.onChangeHandler }
                />
                <div className="image_space">
                    {!this.state.imagePreview && <p>Please choose an image.</p>}
                    {this.state.imagePreview && (
                        <ShowImage imageUrl={this.state.imagePreview} contain left />
                    )}
                </div>
               
            </div>
        );
    }
}

export default GroupProductDetails
;