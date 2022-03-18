//---------------------------------------------------------------------------
//imports
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { CryptoState } from "../../CryptoContext";
import { Avatar, Button } from "@material-ui/core";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { numberWithCommas } from "../Crypto/CoinsTable";
import { AiFillDelete } from "react-icons/ai";
import { doc, setDoc } from "firebase/firestore";
import { Select, MenuItem } from "@material-ui/core";
import defaultProfile from "./profile.jpg";
// -------------------------------------------------------------------------------------
//Styling and responsiveness
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#c6cec6",
    width: 350,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "antonio",
    fontSize: 22,
  },
  profile: {
    padding: 25,
    paddingTop: 50,
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  avtContainer: {
    height: 50,
    width: 50,
    marginRight: 20,
    float: "right",
    cursor: "pointer",
    backgroundColor: "white",
    boxShadow: "0px 2px 2px 1px #aaa",
    [theme.breakpoints.down("lg")]: {
      width: 50,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
    [theme.breakpoints.down("xs")]: {
      width: "41%",
    },
  },
  picture: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    boxShadow: "0px 2px 2px 1px #aaa",
    objectFit: "contain",
  },
  favorites: {
    flex: 1,
    width: "100%",
    backgroundColor: "#c6cec6",
    padding: 15,
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    overflow: "scroll",
    msOverflowStyle: "none",
  },
  coin: {
    padding: 12,
    borderRadius: 30,
    color: "black",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "0px 2px 2px 1px #aaa",
  },
  logout: {
    margin: 20,
    height: 40,
    width: 150,
    borderRadius: 20,
    backgroundColor: "#174f1a",
    color: "white",
    fontFamily: "antonio",
    fontSize: 20,
    fontWeight: 500,

    "&:hover": {
      color: "#233c25",
      fontWeight: 1000,
    },
  },
  // ----------------------------------------------------------------------------
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
  },
  menuItem: {
    fontSize: 14,
    color: "#f2f2f2",
    letterSpacing: 1,
    fontFamily: "Antonio",
    fontWeight: "bold",
  },
}));
// -------------------------------------------------------------------------------------
//Sidebar componenet structure
export default function UserSidebar() {
  //Variables and states
  const { currency, setcurrency } = CryptoState();
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const { user, setAlert, favoriteslist, coins, symbol } = CryptoState();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const removeFromFavoriteslist = async (coin) => {
    const coinRef = doc(db, "favoriteslist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: favoriteslist.filter((wish) => wish !== coin?.id) },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coin.name} Removed from the Favorites !`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };
  const logout = () => {
    signOut(auth);
    setAlert({
      open: true,
      type: "success",
      message: "Successfully logged out !",
    });

    toggleDrawer();
  };
  // -------------------------------------------------------------------------------------
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {/* Currency Button */}
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

            {/* Profile Homepage */}
            <Avatar
              className={classes.avtContainer}
              onClick={toggleDrawer(anchor, true)}
              src={user.photoURL}
              alt={user.displayName || user.email}
            />
          </div>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {/* Profile Sidebar Container */}
            <div className={classes.container}>
              <div className={classes.profile}>
                {/* Profile Picture Sidebar */}
                <Avatar
                  style={{
                    height: 150,
                    width: 150,
                    boxShadow: "0px 2px 2px 1px #aaa",
                    backgroundColor: "white",
                  }}
                >
                  {/* Profile Image */}

                  <img
                    className={classes.picture}
                    src={user.photoURL || defaultProfile}
                    alt={user.displayName || user.email}
                  />
                </Avatar>
              </div>
              {/* ------------------------------------------------------ */}
              {/* Username container */}
              <span
                style={{
                  marginBottom: 10,
                  backgroundColor: "#f2f2f2",
                  color: "black",
                  width: "100%",
                  height: 60,
                  fontSize: "25",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "antonio",
                  fontWeight: 400,
                  wordWrap: "break-word",
                  boxShadow: "0px 2px 2px 1px #aaa",
                }}
              >
                {user.displayName || user.email}
              </span>
              {/* ---------------------------------------------------------- */}
              {/* My favourite container */}
              <div className={classes.favorites}>
                <span
                  style={{
                    margin: 10,
                    backgroundColor: "transparent",
                    fontFamily: "antonio",
                    fontSize: 25,
                    fontWeight: 600,
                    color: "black",
                  }}
                >
                  My Favorites
                </span>
                {/* ------------------------------------------------------- */}
                {/* Favourite details */}
                {coins.map((coin, i) => {
                  if (favoriteslist.includes(coin.id))
                    return (
                      // Card container
                      <div className={classes.coin} key={i}>
                        {/* Coin image */}
                        <div
                          style={{
                            width: 50,
                          }}
                        >
                          <img src={coin.image} height="40" width="40" />
                        </div>

                        {/* Coin Name */}
                        <div
                          style={{
                            width: "35%",
                          }}
                        >
                          <span>{coin.name}</span>
                        </div>

                        {/* Coin Price */}
                        <div
                          style={{
                            fontWeight: 600,
                            width: "35%",
                          }}
                        >
                          <span
                            style={{
                              gap: 10,
                            }}
                          ></span>
                          {symbol}
                          {numberWithCommas(coin.current_price.toFixed(2))}
                        </div>

                        {/* Delete Symbol */}
                        <AiFillDelete
                          style={{
                            cursor: "pointer",
                            right: 0,
                          }}
                          fontSize="20"
                          onClick={() => removeFromFavoriteslist(coin)}
                        />
                      </div>
                    );
                })}
              </div>
              {/* ---------------------------------------------------------- */}

              {/* ----------------------------------------------------- */}
              <Button
                variant="contained"
                className={classes.logout}
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
