import React from 'react';

const INPUTS = props => {
    return(
        <React.Fragment>
            <label>{ props.label }: </label>
            <input type={ props.type }
                name={ props.name }
                onChange={ e => { props.setValues(e) } }
                value = { props.value  }
                multiple={ props.multiple }
            />    
        </React.Fragment>
    )
}

export default INPUTS;