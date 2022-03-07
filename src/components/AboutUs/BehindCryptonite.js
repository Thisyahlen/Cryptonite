import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import thisyahlen from "./picture/thisyahlen.jpg";
import zawir from "./picture/zawir.jpg";
import tati from "./picture/tati.jpg";
import zee from "./picture/zee.jpg";
import haley from "./picture/haley.jpg";

const useStyles = makeStyles((theme) => ({
  behindContainer: {
    // backgroundColor: "blue",
    display: "flex",
    zIndex: 0,
  },
  behindContent: {
    // backgroundColor: "pink",
    backgroundColor: "white",
    // height: "auto",
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    display: "flex",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "center",
    width: 1450,
    padding: 40,
    // paddingLeft: 100,
    // zIndex: -1,
    boxShadow: "0px 2px 2px 1px #aaa",
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "blue",
      // justifyContent: "center",
      // alignContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "pink",
      width: "90%",
      // justifyContent: "center",
      // alignContent: "center",
      padding: "40px 30px",
    },
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "lightblue",
      // paddingLeft: 30,
    },
  },
  anotherContent: {
    // backgroundColor: "indigo",
    width: "18%",
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "blue",
    },
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "green",
    },
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "gray",
      width: "10%",
    },
  },
  innerContent: {
    // backgroundColor: "yellow",
    width: 900,
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "red",
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "green",
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "gray",
      width: "87%",
    },
  },
  behindTitle: {
    fontWeight: 600,
    fontSize: 40,
    fontFamily: "Antonio",
    color: "#000",
    letterSpacing: 2,
    lineHeight: 1,
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "yellow",
      // textAlign: "center",
      fontSize: 30,
    },
  },
  behindText: {
    fontSize: 20,
    fontFamily: "garamond",
    color: "#000",
    paddingTop: 20,
    lineHeight: 1.1,
    textAlign: "justify",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  firstPotrait: {
    // backgroundColor: "yellow",
    width: "100%",
    display: "flex",
    margin: "50px 0px 25px 0px",
    // padding: 50,
    color: "#000",

    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "gray",
    },
  },
  potrait1: {
    aspectRatio: 4 / 5,
    width: "30%",
    margin: 0,
  },
  potrait2: {
    // display: "block",
    width: "100%",
    margin: 0,
  },
  otherPotraits: {
    display: "inline-flex",
    width: "100%",
    margin: "25px 0px 25px 0px",
    padding: 0,
    justifyContent: "space-between",
  },
  otherPotrait1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    margin: 0,
    marginRight: 5,
    flex: "calc(799/1024)",
  },
  otherPotrait2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    margin: 0,
    marginRight: 5,
    flex: "calc(800/947)",
  },
  otherPotrait3: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    margin: 0,
    marginRight: 5,
    flex: "calc(3142/3820)",
  },
  otherPotrait4: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    margin: 0,
    marginRight: 5,
    flex: "calc(640/861)",
  },
  member1: {
    color: "#174f1a",
    margin: 0,
    fontSize: 35,
    fontFamily: "Antonio",
    fontWeight: 550,
    letterSpacing: 2,
    textTransform: "uppercase",
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "gray",
      fontSize: 20,
    },
  },
  member1Text: {
    marginLeft: 20,
    padding: 0,
  },
  otherMember: {
    // backgroundColor: "red",
    color: "#5c5c5c",
    margin: 0,
    fontSize: 25,
    fontFamily: "antonio",
    textTransform: "uppercase",
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "gray",
      fontSize: 12,
    },
  },
  decorativeLine: {
    width: "100%",
    backgroundColor: "#000",
    opacity: "25%",
    height: 1.5,
  },
}));

const BehindCryptonite = () => {
  const classes = useStyles();

  return (
    <div className={classes.behindContainer}>
      <div className={classes.behindContent}>
        <div className={classes.innerContent}>
          <Typography className={classes.behindTitle}>
            BEHIND CRYPTONITE
          </Typography>
          <Typography className={classes.behindText}>
            "Alone we can do so little; together we can do so much." – Helen
            Keller.<br></br>Meet the team behind Cryptonite. They call
            themselves OnlyFive!
          </Typography>
          <div className={classes.firstPotrait}>
            <img src={thisyahlen} alt="member" className={classes.potrait1} />
            <div className={classes.member1Text}>
              <Typography className={classes.member1}>
                Thisyahlen Nair
              </Typography>
              <Typography className={classes.otherMember}>
                Team Representative
              </Typography>
            </div>
          </div>
          <div className={classes.decorativeLine}></div>
          <div className={classes.otherPotraits}>
            <div className={classes.otherPotrait1}>
              <img src={zawir} alt="member" className={classes.potrait2} />
              <Typography className={classes.otherMember}>Zawir</Typography>
            </div>
            <div className={classes.otherPotrait2}>
              <img src={tati} alt="member" className={classes.potrait2} />
              <Typography className={classes.otherMember}>
                Tatiana Cheah
              </Typography>
            </div>
            <div className={classes.otherPotrait3}>
              <img src={zee} alt="member" className={classes.potrait2} />
              <Typography className={classes.otherMember}>
                Amirul Hazwan
              </Typography>
            </div>
            <div className={classes.otherPotrait4}>
              <img src={haley} alt="member" className={classes.potrait2} />
              <Typography className={classes.otherMember}>Haley Gan</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.anotherContent}></div>
    </div>
  );
};

export default BehindCryptonite;
