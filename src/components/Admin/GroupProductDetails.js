import React from 'react';

import SelectCategory from './SelectCategory';
import EnterProductDetails from './EnterProductDetails';

class GroupProductDetails extends React.Component {
    
    state = {
        category: '',
        name: '',
        brand: '',
        model: '',
        price: 0,
        description: '',
        imagePath: '',
        imagePreview: null
    }

    onChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {

        console.log(this.state)

        const { category, imagePreview, ...noA } = this.state;

        return (
            <React.Fragment>
                <SelectCategory 
                    getValue = { this.state.category }
                    // setValue = { this.onChangeHandler }
                />
                <EnterProductDetails 
                    getValue = { noA }
                    setValue = { this.onChangeHandler }
                />
            </React.Fragment>
        );
    }
}

export default GroupProductDetails
;