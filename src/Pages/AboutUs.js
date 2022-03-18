import React from "react";
import { makeStyles } from "@material-ui/core";
import logo from "../components/Cryptonite Logo.png";
import LogoBanner from "../components/AboutUs/LogoBanner";
import OurStory from "../components/AboutUs/OurStory";
import BehindCryptonite from "../components/AboutUs/BehindCryptonite";
import FormRating from "../components/Help/FormRating";

const useStyles = makeStyles((theme) => ({
  // about: { scrollBehavior: "smooth" },
  dummy: {
    height: 160,
    backgroundColor: "#c6cec6",
    // zIndex: 1,
    marginTop: -120,
    [theme.breakpoints.down("sm")]: {
      height: 120,
    },
  },
  background: {
    // backgroundColor: "red",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    // backgroundImage: "url(./topo.jpg)",
    overflowX: "hidden",
    marginBottom: -50,
  },
  ourStoryContainer: {
    // overflow: "hidden",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  bottomLogoContainer: {
    // backgroundColor: "red",
    display: "flex",
    width: 1500,
    marginLeft: "10vw",
    marginTop: -990,
    justifyContent: "flex-end",
    alignItems: "flex-end",

    [theme.breakpoints.down("md")]: {
      // backgroundColor: "yellow",
      marginLeft: -300,
      marginTop: -990,
    },
    [theme.breakpoints.down("sm")]: {
      height: 1050,
      width: 1300,
      // backgroundColor: "pink",
      marginLeft: -300,
      marginTop: -990,
    },
  },
  bottomLogo: {
    display: "flex",
    width: "70%",
    marginRight: -250,
    [theme.breakpoints.down("md")]: {
      marginRight: -220,
      marginTop: 100,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: -150,
      width: "65%",
    },
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <div className={classes.dummy}></div>
      <LogoBanner />
      <div className={classes.background}>
        <div className={classes.ourStoryContainer}>
          <OurStory />
        </div>
        <FormRating />
        <BehindCryptonite />
        <div className={classes.bottomLogoContainer}>
          <img src={logo} alt="logo" className={classes.bottomLogo} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
