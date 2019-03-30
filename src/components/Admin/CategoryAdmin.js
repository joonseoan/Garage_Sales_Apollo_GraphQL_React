import React from 'react';
import _ from 'lodash';

import productCategories from './productCategories';

class CategoryAdmin extends React.Component {

    state = {
        selectedCategory: ''
    }

    handleSelect = (id) => {
        this.setState({ selectedCategory: id });
    }

    renderCategories = () => {
        return _.map(productCategories, categoryItem => {
            return (
                <div 
                    onClick={ () => { this.handleSelect(categoryItem.id) } } 
                    key={ categoryItem.id }>
                    {categoryItem.category}
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <button type="button">Select Product Category</button>
                <div>
                    { this.renderCategories() }
                </div>
            </div>
        );
    }
}

export default CategoryAdmin;