import React from 'react';

import productCategories from './productCategories';

const SelectCategory = props => {

    const renderCategories = () => {
        // must build active css based on props.getValue!!!!
        return productCategories.map(categoryItem => {
            const { key, value } = categoryItem;
            return (
                <div 
                    onClick={ () => { props.setValues({ name: "category", value })} } 
                    key={ key }>
                    { value }
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