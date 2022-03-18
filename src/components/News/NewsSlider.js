//---------------------------------------------------------------------------
//imports
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Slider from "react-slick";
import "./News.css";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//---------------------------------------------------------------------------
//Styling and responsiveness
const useStyles = makeStyles((theme) => ({
  loading: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

//---------------------------------------------------------------------------
//News Slider component structure
const NewsSlider = () => {
  //Variables and states
  const [post, setPost] = useState([]);
  const [error, setError] = useState([]);
  const [flag, setFlag] = useState(false);
  const classes = useStyles();

  //API call
  useEffect(() => {
    // invalid url will trigger an 404 error
    axios
      .get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
      .then((response) => {
        console.log(response.data.Data);
        setPost(response.data.Data.splice(0, 10));
        setFlag(true);
      })
      .catch((error) => {
        setError(error);
      });
    return () => {};
  }, []);

  const breakpoint = {
    // Small screen / phone
    sm: 576,
  };

  //Slider settings
  const sliderSettings = {
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    infinite: true,
    swipeToSlide: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: breakpoint.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          autoplaySpeed: 5000,
        },
      },
    ],
  };

  //Styling
  const styles = {
    media: {
      height: 0,
      paddingTop: "50%", // 16:9
      opacity: 0.3,
    },
    card: {
      backgroundColor: "black",
      position: "relative",
      borderRadius: 20,
      marginLeft: "5px",
      marginRight: "5px",
    },
  };

  //Slider structure
  const renderSlides = () =>
    post.map((posts, i) => (
      <div style={{ backgroundColor: "blue" }} key={i}>
        <CardActionArea href={posts.url} target="_blank">
          <Card style={styles.card}>
            <CardMedia image={posts.imageurl} style={styles.media} />

            <div className="overlay-box">
              <div className="overlay">{posts.title}</div>
            </div>
          </Card>
          <span></span>
        </CardActionArea>
      </div>
    ));
  return (
    //return news slides
    <div className="sliderContainer">
      {!post | (flag === false) ? (
        <div className="loading-indicator">
          <CircularProgress
            className={classes.loading}
            style={{ color: "#c6cec6", justifyContent: "center" }}
            size={150}
            thickness={1}
          />
        </div>
      ) : (
        <Slider className="sliderWrapper" {...sliderSettings}>
          {renderSlides()}
        </Slider>
      )}
    </div>
  );
};

//---------------------------------------------------------------------------
//export
export default NewsSlider;
