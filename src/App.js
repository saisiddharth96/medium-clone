import React, { Component } from 'react';
import './App.css';
import "./styles/default-styles.css";


import Header from "./components/Header/Header.js"
import TopRecommendedArticles from "./components/Top-Recommended-Articles/TopRecommendedArticles.js"

class App extends Component {
  render() {
    return (
      <div className = "main-container">
        <Header/>
        <TopRecommendedArticles/>
      </div>
    );
  }
}

export default App;
