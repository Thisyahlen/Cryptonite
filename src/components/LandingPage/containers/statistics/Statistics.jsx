//---------------------------------------------------------------------------
//imports
import React from "react";
import coins from "../../../../media/NicePng_cryptocurrency-png_1923799 2.png";
import "./statistics.css";
import { useNavigate } from "react-router-dom";

//---------------------------------------------------------------------------
//Statistics container structure
const Statistics = () => {
  //Variable
  const navigate = useNavigate();

  return (
    <div className="crypto__statistics section__padding" id="statistics">
      <div className="crypto__statistics-image">
        <img src={coins} alt="coinage" />
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
          <button type="button" onClick={() => navigate("/")}>
            Conquer the market now
          </button>
        </div>
      </div>
    </div>
  );
};

//---------------------------------------------------------------------------
//export
export default Statistics;
