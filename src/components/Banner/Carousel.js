//---------------------------------------------------------------------------
//imports
import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import { numberWithCommas } from "../Crypto/CoinsTable";
import { CircularProgress } from "@material-ui/core";
import { useStyles } from "./trendStyle.js";

//---------------------------------------------------------------------------
//Carousel componenet structure
const Carousel = () => {
  //Variables and states
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currency, symbol } = CryptoState();

  //API call
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setLoading(false);
    setTrending(data);
  };
  //retrieve trending coins and their details
  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const classes = useStyles();

  //Mapping out data received into carousel
  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;
    //return a card with trending coin and details within the carousel
    return (
      <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
        <div className={classes.coinImage}>
          <img src={coin?.image} alt={coin.name} />
        </div>
        <div className={classes.coinDetails}>
          <span className={classes.coinTitle}>{coin?.name}</span>
          <div className={classes.coinHighlight}>
            <span className={classes.coinPrice}>
              {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
            </span>
            &nbsp;
            <span
              className={classes.coinChange}
              style={{
                color: profit > 0 ? "rgb(48, 231, 57)" : "red",
              }}
            >
              {profit && "+"}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </div>
          <div className={classes.coinInfo}>
            <span className={classes.volTitle}>24 Hour Volume</span>
            &nbsp;
            <span className={classes.coinVol}>
              {symbol} {numberWithCommas(coin?.total_volume.toFixed(2))}
            </span>
          </div>
          <div className={classes.coinInfo}>
            <span className={classes.capitalTitle}>MKT CAPITAL</span>
            &nbsp;
            <span className={classes.capital}>
              {symbol} {numberWithCommas(coin?.market_cap.toFixed(2))}
            </span>
          </div>
        </div>
      </Link>
    );
  });
  //shows one card per slide of carousel
  const responsive = {
    0: {
      items: 1,
    },
  };

  //carousel settings
  return (
    <div className={classes.carousel}>
      {loading ? (
        <CircularProgress
          style={{ color: "#c6cec6" }}
          size={250}
          thickness={1}
        />
      ) : (
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationType="slide"
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
        />
      )}
    </div>
  );
};

//---------------------------------------------------------------------------
//export
export default Carousel;
