import React from 'react';

import SelectCategory from './SelectCategory';
import EnterProductDetails from './EnterProductDetails';
import { generateBase64FromImage } from '../../utils/imageFile';
import ShowImage from './ShowImage';

import './GroupProductDetail.css';

class GroupProductDetails extends React.Component {

    onChangeHandler = (categoryValue, e) => {
        if(categoryValue) {
            const { name,  value } = categoryValue;
            return this.props.setValues(name, value);
        } else {
            const { name, value, files } = e.target;
            if(name === 'imagePath') {
                this.props.setValues(name, files[0]);
                return generateBase64FromImage(files[0])
                    .then(b64 => {
                        if(!b64) {
                            throw new Error('Unanble to convert to b64.');
                        }
                        this.props.setValues("imagePreview", b64);
                    })
                    .catch(e => {
                        this.props.setValues("imagePreview", null);
                    })
            }
            this.props.setValues(name, value);
        }
    }

    render() {

        // removing object
        // 1) can use _.omit(this.state, 'category') => single properties by using lodash
        // 2) const newState = { ...this.state, imagePreview: undefined } // both
        // 3)
        const { category, imagePreview, ...noA } = this.props.getValues; // multiple properties

        return (
            <div>
                <SelectCategory 
                    getValues = { this.props.getValues.category }
                    setValues = { this.onChangeHandler }
                />
                <EnterProductDetails 
                    getValues = { noA }
                    setValues = { this.onChangeHandler }
                />
                <div className="image_space">
                    {!this.props.getValues.imagePreview && <p>Please choose an image.</p>}
                    {this.props.getValues.imagePreview && (
                        <ShowImage imageUrl={this.props.getValues.imagePreview} contain left />
                    )}
                </div>
            </div>
        );
    }
}

export default GroupProductDetails;