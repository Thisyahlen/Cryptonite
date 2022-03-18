//---------------------------------------------------------------------------
//imports
import React from "react";
import Box from "@mui/material/Box";
import "./Help.css";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import ApartmentIcon from "@mui/icons-material/Apartment";

//---------------------------------------------------------------------------
//Styling and responsiveness
const useStyles = makeStyles((theme) => ({
  title: {
    width: 1100,
    fontFamily: "Antonio",
    fontWeight: 600,
    letterSpacing: 3,
    margin: "0 !important",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  subtitle: {
    width: 1100,
    fontFamily: "garamond",
    fontSize: 18,
    paddingBottom: 10,
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  wrapIcon: {
    width: 1100,
    display: "flex",
    alignItems: "center",
    fontFamily: "Antonio",
    margin: "0 !important",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
}));

//---------------------------------------------------------------------------
//Contactus componenet structure
export default function Contactus() {
  //Variable
  const classes = useStyles();

  return (
    <div className="Help">
      <Box
        className="contact-us"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "#f2f2f2",
          color: "#000",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 0px 50px 0px",
        }}
      >
        {" "}
        <Typography variant="h4" className={classes.title}>
          CONTACT US
        </Typography>
        <Typography variant="subtitle2" className={classes.subtitle}>
          Questions not answered? Call or email us directly here!
        </Typography>
        <Typography variant="subtitle1" className={classes.wrapIcon}>
          <LocalPhoneIcon style={{ marginRight: 15 }} />
          011-1114 9762
        </Typography>
        <Typography variant="subtitle1" className={classes.wrapIcon}>
          <EmailIcon style={{ marginRight: 15 }} />
          helpdesk@cryptonite.com.my
        </Typography>
        <Typography variant="subtitle1" className={classes.wrapIcon}>
          <ApartmentIcon style={{ marginRight: 15 }} />
          Level 20, iTech Tower, Jalan Impact Cyber 6, 63000 Cyberjaya, Selangor
        </Typography>
      </Box>
    </div>
  );
}
