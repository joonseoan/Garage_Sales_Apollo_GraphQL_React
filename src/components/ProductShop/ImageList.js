
import './ImageList.css';
import React from 'react';
// import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

import getImageList from '../../queries/getImageList';
import { ShowImageList } from '../../utils/images/imgs';
import _ from 'lodash';

class ImageList extends React.Component {
    
    imageRef = React.createRef();
    state = { spans: 10 }

    handleImageLoad = () => {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 30);
        this.setState({ spans });
    }

    renderImages = () => {
        
        return _.map(this.props.images, imagePath => 
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
        console.log(this.props.images);
        return(<div className="image-list">
            { this.renderImages() }
        </div>);
    }

    componentDidUpdate() {
        this.handleImageLoad()
    }
}



const mapStateToProps = ({ productList }) => {
    let images = [];
        _.each(productList, ({ imagePaths} )=> 
        images = [ ...images, ...imagePaths ]
        );  
    return { images };
}

export default connect(mapStateToProps)(ImageList);