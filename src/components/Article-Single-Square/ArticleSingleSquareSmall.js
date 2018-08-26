import React from "react";

import "./ArticleSingleSquareSmall.css";
import "../../styles/default-styles.css";

import PlaceholderImage from "../../asstes/images/placeholder-image.jpg";
import star from "../../asstes/images/star.png";

const ArticleSingleSquareSmall = () => {
  return (
    <div className="square-article-container">
      <div className="article-header-image">
        <img
          src={PlaceholderImage}
          alt="placeholder string"
          className="header-image"
        />
      </div>
      <div className="article-header-info">
        <h1 className="main-header-text">Lorem ipsum dolor sit </h1>
        <h2 className="sub-header-text">Lorem ipsum dolor sit </h2>
        <h3 className="author-name-text">Lorem ipsum</h3>
        <div className = "date-read-time">
          <h3 className="date-added">Sample Date</h3>
          <img src={star} alt="star-img" className = "star-icon"/>
          <h3 className="read-time">x min read</h3>
        </div>
      </div>
    </div>
  );
};

export default ArticleSingleSquareSmall;
