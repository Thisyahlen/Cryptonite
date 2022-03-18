//---------------------------------------------------------------------------
//imports
import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Login from "./Login";
import Signup from "../Authentication/Signup";
import GoogleButton from "react-google-button";
import loginStone from "../../media/Gray Stone.png";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Tab,
  Tabs,
  AppBar,
  Box,
  Select,
  MenuItem,
} from "@material-ui/core";
import { auth } from "../../firebase";
import { CryptoState } from "../../CryptoContext";

//---------------------------------------------------------------------------
//Styling and responsiveness
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    fontFamily: "antonio",
    backgroundColor: "#f2f2f2",
    color: "black",
    borderRadius: 10,

    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
    },
    [theme.breakpoints.down("lg")]: {
      borderRadius: 10,
    },
  },
  google: {
    fontFamily: "antonio",
    color: "black",
    padding: 24,
    paddingTop: 0,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: 20,
    fontSize: 20,
  },
  // -------------------------------------------------------------------------------------
  loginBody: {
    marginRight: 20,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  loginBtn: {
    width: 220,
    backgroundColor: "#233c25",
    borderRadius: 50,

    "&:hover": {
      color: "blue",
      backgroundColor: "#f2f2f2",
      boxShadow: "0px 2px 2px 1px #aaa",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  smLoginBtn: {
    display: "none",
    backgroundColor: "#233c25",

    "&:hover": {
      color: "blue",
      backgroundColor: "#f2f2f2",
      boxShadow: "0px 2px 2px 1px #aaa",
    },

    [theme.breakpoints.down("md")]: {
      width: 150,
      height: 45,
      borderRadius: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      width: 110,
      height: 45,
      borderRadius: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "white",
      },
    },
  },
  login: {
    width: 120,
    height: 35,
    paddingLeft: 30,
    marginRight: 5,
    backgroundColor: "#174f1a",
    borderRadius: 50,
    letterSpacing: 2,
    cursor: "pointer",
    fontFamily: "Antonio",
    fontSize: 18,
    color: "#f2f2f2",
    fontWeight: "bold",
    whiteSpace: "nowrap",

    "&:hover": {
      color: "#7c7c7c",
      backgroundColor: "#f2f2f2",
      boxShadow: "0px 2px 2px 1px #aaa",
    },
  },
  // -------------------------------------------------------------------------------------
  currencyBody: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: 20,
    },
  },
  currencyButton: {
    borderRadius: 30,
    fontSize: 15,
    color: "#7c7c7c",
    backgroundColor: "#f2f2f2",
    letterSpacing: 2,
    fontWeight: "bold",
    fontFamily: "Antonio",
    height: 35,
    label: "#000000",
    "& .MuiSvgIcon-root": {
      color: "lightgray",
    },
    "&:hover": {
      color: "#555",
      fontWeight: 550,
      "& .MuiSvgIcon-root": {
        color: "gray",
      },
      [theme.breakpoints.down("sm")]: {
        display: "flex",
      },
    },

    [theme.breakpoints.down("xs")]: {
      marginLeft: 20,
    },
  },
  menuItem: {
    fontSize: 14,
    color: "#f2f2f2",
    letterSpacing: 1,
    fontFamily: "Antonio",
    fontWeight: "bold",
  },
  loginStone: {
    height: 90,
    padding: 10,
    "&:hover": {
      height: 95,
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "transparent",
      cursor: "pointer",
      height: 70,
      padding: 0,
      margin: 0,
      "&:hover": {
        height: 75,
      },
    },

    [theme.breakpoints.down("xs")]: {
      backgroundColor: "transparent",
      cursor: "pointer",
      height: 45,
      padding: 0,
      marginLeft: 0,
      "&:hover": {
        height: 55,
      },
    },
  },
}));
// -------------------------------------------------------------------------------------
export default function AuthModal() {
  //variables and states
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { currency, setcurrency } = CryptoState();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { setAlert } = CryptoState();

  // -------------------------------------------------------------------------------------
  return (
    <div className={classes.loginBody}>
      <div className={classes.loginBtn}>
        <Button>
          <Select
            variant="outlined"
            className={classes.currencyButton}
            value={currency}
            onChange={(e) => setcurrency(e.target.value)}
          >
            <MenuItem className={classes.menuItem} value={"USD"}>
              USD
            </MenuItem>
            <MenuItem className={classes.menuItem} value={"MYR"}>
              MYR
            </MenuItem>
          </Select>
        </Button>

        <Button
          className={classes.login}
          variant="contained"
          onClick={handleOpen}
        >
          Login
          <img className={classes.loginStone} src={loginStone} alt="login" />
        </Button>
      </div>
      {/* ------------------------------------------------------------------------------------------- */}
      <div className={classes.smLoginBtn}>
        <Button className={classes.currencyBody}>
          <Select
            variant="outlined"
            className={classes.currencyButton}
            value={currency}
            onChange={(e) => setcurrency(e.target.value)}
          >
            <MenuItem className={classes.menuItem} value={"USD"}>
              USD
            </MenuItem>
            <MenuItem className={classes.menuItem} value={"MYR"}>
              MYR
            </MenuItem>
          </Select>
        </Button>

        <Button onClick={handleOpen}>
          <img className={classes.loginStone} src={loginStone} alt="login" />
        </Button>
      </div>
      {/* ------------------------------------------------------------------------------------------- */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <AppBar
              position="static"
              style={{
                backgroundColor: "transparent",
                color: "black",
                fontFamily: "antonio",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                style={{
                  borderRadius: 10,
                  fontFamily: "antonio",
                  color: "black",
                }}
              >
                <Tab
                  label="Login"
                  style={{
                    fontFamily: "antonio",
                    color: "black",
                    fontSize: 20,
                    fontWeight: 400,
                  }}
                />
                <Tab
                  label="Sign Up"
                  style={{
                    fontFamily: "antonio",
                    color: "black",
                    fontSize: 20,
                    fontWeight: 400,
                  }}
                />
              </Tabs>
            </AppBar>

            {value === 0 && <Login handleClose={handleClose} />}
            {value === 1 && <Signup handleClose={handleClose} />}
          </div>
        </Fade>
      </Modal>
      {/* ------------------------------------------------------------------------------------- */}
    </div>
  );
}
