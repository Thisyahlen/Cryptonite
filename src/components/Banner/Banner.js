//---------------------------------------------------------------------------
//imports
import { Container, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";
import { useStyles } from "./trendStyle.js";

//---------------------------------------------------------------------------
//Banner component structure
function Banner() {
  //Variable
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography variant="h2" className={classes.trendTitle}>
            Trending Cryptocurrencies
          </Typography>
          <Typography variant="h5" className={classes.trendTagline}>
            These coins are getting rising attention - Check out the top 10 most
            popular cryptocurrency coins for the last 24 hours.
          </Typography>
        </div>
        <Container className={classes.card} maxWidth="lg">
          <Carousel />
        </Container>
      </Container>
    </div>
  );
}

//---------------------------------------------------------------------------
//export
export default Banner;
