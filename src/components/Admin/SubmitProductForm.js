import React from 'react';

import GroupProductDetails from './GroupProductDetails';

class SubmitProductForm extends React.Component {

    render() {
        return(
            <div>
                <form>
                    <GroupProductDetails />
                    <button type="submit">Register products</button>
                </form>
            </div>
        );
    }
}

export default SubmitProductForm;