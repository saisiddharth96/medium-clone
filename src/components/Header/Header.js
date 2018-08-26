import React from "react";
import "./header.css";

import AccountImage from "../../asstes/images/account_circle.png";
import SearchImage from "../../asstes/images/search-icon.png";
import NotificationImage from "../../asstes/images/notification.png";

const Header = () => {
  return (
    <header className="header-container-component">
      <div className="left-upgrade-button-container">
        <button className="left-upgrade-button">Upgrade</button>
      </div>
      <div className="header-image-container">
        <h1 styles={{ marin: 0, padding: 0 }}>Medium</h1>
      </div>
      <div className="right-buttons">
      <img
          src={SearchImage}
          alt="Search Image"
          className="account-icon-badge"
        />  
        <img
          src={NotificationImage}
          alt="Search Image"
          className="account-icon-badge"
        />  
      <img
          src={AccountImage}
          alt="Account Image"
          className="account-icon-badge"
        />
      </div>
    </header>
  );
};

export default Header;
