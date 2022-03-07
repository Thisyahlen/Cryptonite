import React from "react";
import coins from "../../../../media/NicePng_cryptocurrency-png_1923799 2.png";
import "./statistics.css";
const Statistics = () => (
  <div className="crypto__statistics section__padding" id="statistics">
    <div className="crypto__statistics-image">
      <img src={coins} />
    </div>
    <div className="crypto__statistics-content">
      <p>
        In the previous year, 6,056 traders took up Cryptonite to take reigns
        over the market.
      </p>

      <p>
        Surging of Cryptocurrencies being the most profitable investment there
        is.
      </p>

      <div className="crypto__statistics-content__input">
        <button type="button">Conquer the market now</button>
      </div>
    </div>
  </div>
);

export default Statistics;
