
import './ImageList.css';
import React from 'react';

import { ShowImageList } from '../../utils/images/imgs';
import _ from 'lodash';

class ImageList extends React.Component {
    
    imageRef = React.createRef();
    state = { spans: 10 }

    componentDidMount = () => {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    }

    renderImages = () => {
            let imageUrls = [];
            _.each(this.props.images, ({ imagePaths} )=> 
                imageUrls = [ ...imageUrls, ...imagePaths ]);  
        
        return _.map(imageUrls, imagePath => 
            <div key={ imagePath } style={{ gridRowEnd: `span ${ this.state.spans }` }}>
                <ShowImageList 
                    imagePath={ imagePath }
                    imageRef={ this.imageRef }
                />
            </div>
        );
    }

    render() {
        if(this.props.images.length === 0) return <div/>;
        return(<div className="image-list">
            { this.renderImages() }
        </div>);
    }
}

export default ImageList;