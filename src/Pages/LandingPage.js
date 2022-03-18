//---------------------------------------------------------------------------
//imports
import React from "react";
import {
  Testament,
  Features,
  Message,
  Header,
  Statistics,
  FAQ,
} from "../components/LandingPage/containers";
import { makeStyles } from "@material-ui/core";
import { Navbar, Scroller } from "../components/LandingPage/components";
import "../components/LandingPage/LandingPage.css";
import "../components/LandingPage/index.css";
import logo from "../media/Cryptonite Logo (Silver Coin).png";

//---------------------------------------------------------------------------
//Styling and responsiveness
const useStyles = makeStyles((theme) => ({
  "@keyframes spin": {
    "0%": {
      opacity: 0,
      transform: "translateX(2000px)",
    },
    "60%": {
      opacity: 1,
      transform: "translateX(-30px)",
    },
    "80%": { transform: "translateX(10px)" },
    "100%": { transform: "translateX(0)" },
  },
  logoCont: {
    position: "absolute",
    overflowX: "hidden",
    width: "50%",
    paddingLeft: 100,
    right: 0,
    top: 650,
    zIndex: 4,
    animation: "$spin 2s linear",
    [theme.breakpoints.down("md")]: {
      paddingLeft: 180,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

//---------------------------------------------------------------------------
//Landing page structure

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className="landing-page ">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div>
        <Testament />
        <div className={classes.logoCont}>
          <img src={logo} alt="logo" />
        </div>
      </div>

      <Features />
      <Statistics />
      <FAQ />
      <Message />
      <Scroller />
    </div>
  );
};

//---------------------------------------------------------------------------
//export
export default LandingPage;
