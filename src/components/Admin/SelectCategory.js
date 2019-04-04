import React from 'react';
import _ from 'lodash';

import productCategories from './productCategories';

const SelectCategory = props => {

    const renderCategories = () => {
        // must build active css based on props.getValue!!!!
        return _.map(productCategories, categoryItem => {
            const { name, value } = categoryItem;
            return (
                <div 
                    onClick={ () => { props.setValue(value) } } 
                    key={ value }>
                    { name }
                </div>
            );
        });
    }

    return (
        <div>
            <button type="button">Select Product Category</button>
            <div>
                { renderCategories() }
            </div>
        </div>
    );

}

export default SelectCategory;