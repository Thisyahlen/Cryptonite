//---------------------------------------------------------------------------
//imports
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css";
import { makeStyles, Typography } from "@material-ui/core";
import NewsSlider from "./NewsSlider";

//---------------------------------------------------------------------------
//styling and responsiveness
const useStyles = makeStyles((theme) => ({
  newsTitle: {
    width: "100%",
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
    fontFamily: "Antonio",
    textTransform: "uppercase",
    fontSize: 45,
    letterSpacing: 5,
    lineHeight: 0.9,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
}));

//---------------------------------------------------------------------------
//News container structure
export default function News() {
  const classes = useStyles();
  return (
    <div className="newsContContainer">
      <div className="newsContainer">
        <div className="News">
          {/* News title and description */}
          <div className="news-text">
            {" "}
            <Typography className={classes.newsTitle} variant="h3">
              Crypto News
            </Typography>
            <Typography
              style={{
                fontweight: "light",
                fontFamily: "garamond",
                color: "black",
                fontSize: 18,
                textAlign: "justify",
                lineHeight: 1,
                paddingBottom: 20,
                justifyContent: "center",
                letterSpacing: 1,
              }}
            >
              Get the latest financial news and updates on cryptocurrency
              platform such as Bitcoin,Ethereum, Dogecoin, NFTs and more. See
              articles on price updates, future trends, mining and blockchain
              related stories.
            </Typography>
          </div>
        </div>
        <NewsSlider />
      </div>
    </div>
  );
}
