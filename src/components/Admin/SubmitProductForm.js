import React from 'react';

import GroupProductDetails from './GroupProductDetails';

class SubmitProductForm extends React.Component {
    render() {
        return(
            <form>
                <GroupProductDetails />
                <button type="submit">Register products</button>
            </form>
        );
    }
}

export default SubmitProductForm;