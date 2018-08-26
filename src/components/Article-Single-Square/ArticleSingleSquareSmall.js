import React from 'react';

import PlaceholderImage from '../../asstes/images/placeholder-image.jpg'

const ArticleSingleSquareSmall = () => {
    return (
        <div className = "square-article-container">
            <div className = "article-header-image" >
                <img src={PlaceholderImage} alt="placeholder string" className = "header-image"/>
            </div>
        </div>
    );
};

export default ArticleSingleSquareSmall;