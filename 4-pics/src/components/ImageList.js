import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
    const images = props.images.map((image) => {
        // Keys help React identify which items have changed (added/removed/re-ordered). 
        // To give a unique identity to every element inside the array, a key is required.
        // only changed items will be updated in DOM instead of complete component which will be a performance boost
        return <ImageCard key={image.id} image={image}/>
    });
    return (
        <div className="image-list">{images}</div>
    );
};

export default ImageList;