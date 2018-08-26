import React from 'react';

import ArticleSingleSquareSmall from '../Article-Single-Square/ArticleSingleSquareSmall.js'

import "./TopRecommendedArticles.css"
import "../../styles/default-styles.css"


const TopRecommendedArticles = () => {
    return (
        <div className = "top-recommended-articles-container border-bottom-color">
            <ArticleSingleSquareSmall/>
        </div>
    );
};

export default TopRecommendedArticles;