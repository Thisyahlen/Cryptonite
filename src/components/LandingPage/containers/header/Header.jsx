import React from "react";
import "./header.css";
import logo from "../../../../media/Cryptonite Title (Silver).png";
const Header = () => (
  <div className="crypto__header section__padding" id="home">
    <div className="crypto__header-content">
      <div className="crypto__header-image">
        <img src={logo} alt="logo" />
      </div>
      <h1>The Crypto Market's #1 weakness</h1>
      <p>
        The all-in-one overview of the cryptocurrency and forex market for both
        new and experienced traders alike.
      </p>

      <div className="crypto__header-content__input">
        <button type="button">Conquer the market</button>
      </div>
    </div>
  </div>
);

export default Header;
