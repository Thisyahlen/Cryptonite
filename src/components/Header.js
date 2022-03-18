import NavLogo from "../media/Cryptonite Title Cropped.png";
import UserSidebar from "./Authentication/UserSidebar";
import AuthModal from "./Authentication/AuthModal";
import loginStone from "../media/Gray Stone.png";
import { ClickAwayListener } from "@mui/base";
import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import GoogleButton from "react-google-button";
import {
  AppBar,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Button,
  Box,
  Typography,
  Select,
  Menu,
  MenuItem,
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { CryptoState } from "../CryptoContext";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    position: "static",
    display: "flex",
    top: 0,
    width: "100%",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  nav: {
    position: "static",
    display: "flex",
    flexDirection: "row",
    width: "95%",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#ffffff",

    marginBottom: 25,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    boxShadow: "0px 2px 2px 1px #aaa",
    [theme.breakpoints.up("xs")]: { flexDirection: "column", flexWrap: "wrap" },
  },

  navLogo: {
    display: "flex",
    width: 380,
    height: 70,
    marginRight: 50,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      float: "left",
      padding: 0,
      width: "40%",
      height: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
      width: "40%",
    },
  },
  title: {
    display: "flex",
    fontSize: 18,
    color: "#7c7c7c",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    letterSpacing: 2,
    cursor: "pointer",
    fontFamily: "Antonio",
    marginRight: 20,

    "&:hover": {
      color: "#233c25",
    },

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  hamburger: {
    display: "none",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      width: 40,
      height: 20,
      marginLeft: "auto",
    },
  },
  burgerFrame: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "absolute",
    boxShadow: "1px 1px 1px 1px #888",
    top: 25,
    right: 5,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    paddingBottom: 10,
    flex: 1,
    width: 150,
    padding: "20px 20px 60px 20px",
  },
  burgerItem: {
    color: "#555",
    fontSize: 16,
    fontFamily: "Antonio",
    padding: 5,
    cursor: "pointer",
    textAlign: "right",
    "&:hover": {
      color: "#174f1a",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  close: {
    width: 20,
    height: 20,
    color: "#a9aaa9",
    backgroundColor: "#f2f2f2",
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    right: 0,
    cursor: "pointer",
    "&:hover": {
      color: "#174f1a",
    },
  },
  // ----------------------------------------------------------------------------------
  loginBtn: {
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "flex-end",
      margin: "0px 20px",
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0px 10px",
      width: "50%",
    },
  },
  // ----------------------------------------------------------------------------------
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { currency, setcurrency, user } = CryptoState();
  const [openHamburger, setOpenHamburger] = useState(false);
  // ----------------------------------------------------------------------------------
  const [open, setOpen] = React.useState(false);
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
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setAlert({
          open: true,
          message: `Sign up Successful. Welcome ${res.user.email}`,
          type: "success",
        });
        handleClose();
      })
      .catch((error) => {
        setAlert({
          open: true,
          message: error.message,
          type: "error",
        });
      });
  };
  // ----------------------------------------------------------------------------------
  console.log(currency);
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  const expand = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMinimize = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Container className={classes.navContainer}>
        <AppBar className={classes.nav}>
          <Container className={classes.nav1}>
            <Toolbar>
              <img
                onClick={() => navigate("/")}
                src={NavLogo}
                alt="Logo"
                className={classes.navLogo}
              />
              <Typography
                onClick={() => navigate("/crypto")}
                className={classes.title}
                variant="h6"
              >
                CRYPTO
              </Typography>
              <Typography
                onClick={() => navigate("/forex")}
                className={classes.title}
                variant="h6"
              >
                FOREX
              </Typography>
              <Typography
                onClick={() => navigate("/about")}
                className={classes.title}
                variant="h6"
              >
                ABOUT US
              </Typography>
              <Typography
                onClick={() => navigate("/help")}
                className={classes.title}
                variant="h6"
              >
                HELP
              </Typography>

              {/* --------------------------------------------------------------------- */}
              <div className={classes.loginBtn}>
                {user ? <UserSidebar /> : <AuthModal />}
              </div>
              {/* --------------------------------------------------------------------- */}

              <FaBars
                onClick={() => setOpenHamburger(!openHamburger)}
                className={classes.hamburger}
                id="hamburger"
              />

              {openHamburger && (
                <ClickAwayListener
                  onClickAway={() => setOpenHamburger(!openHamburger)}
                >
                  <Container className={classes.burgerFrame}>
                    <Typography>
                      <AiFillCloseCircle
                        onClick={() => setOpenHamburger(!openHamburger)}
                        className={classes.close}
                      />
                    </Typography>
                    <Typography
                      onClick={() => {
                        navigate("/crypto");
                        setOpenHamburger(!openHamburger);
                      }}
                      className={classes.burgerItem}
                    >
                      CRYPTO
                    </Typography>
                    <Typography
                      onClick={() => {
                        navigate("/forex");
                        setOpenHamburger(!openHamburger);
                      }}
                      className={classes.burgerItem}
                    >
                      FOREX
                    </Typography>
                    <Typography
                      onClick={() => {
                        navigate("/about");
                        setOpenHamburger(!openHamburger);
                      }}
                      className={classes.burgerItem}
                    >
                      ABOUT US
                    </Typography>
                    <Typography
                      onClick={() => {
                        navigate("/help");
                        setOpenHamburger(!openHamburger);
                      }}
                      className={classes.burgerItem}
                    >
                      HELP
                    </Typography>
                    {/* <Typography className={classes.burgerItem}>LOGIN</Typography> */}
                  </Container>
                </ClickAwayListener>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    </ThemeProvider>
  );
};

export default Header;
