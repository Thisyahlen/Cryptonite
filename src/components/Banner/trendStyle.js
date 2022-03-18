//---------------------------------------------------------------------------
//imports
import { makeStyles } from "@material-ui/core";
import WhiteCard from "../../media/card.png";

//---------------------------------------------------------------------------
//Styling and responsiveness
const useStyles = makeStyles((theme) => ({
  //Banner
  bannerContent: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 40,
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      height: 800,
      paddingTop: 40,
    },
    [theme.breakpoints.up("sm")]: {
      height: 800,
      paddingTop: 40,
    },
    [theme.breakpoints.up("md")]: {
      height: 570,
    },
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${WhiteCard})`,
    borderRadius: 30,
    marginTop: 40,
    marginBottom: 40,
    [theme.breakpoints.up("xs")]: {
      height: "75%",
      width: "90%",
    },
    [theme.breakpoints.up("sm")]: {
      height: "75%",
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      height: "65%",
      width: "80%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "90%",
      width: "80%",
    },
  },
  tagline: {
    marginTop: 5,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("xs")]: {
      width: "90%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
  },
  trendTitle: {
    fontWeight: "bold",
    fontFamily: "Antonio",
    color: "white",
    textTransform: "uppercase",
    fontSize: 45,
    letterSpacing: 5,
    lineHeight: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  trendTagline: {
    paddingTop: 15,
    color: "white",
    fontweight: "light",
    fontFamily: "garamond",
    lineHeight: 1,
    textAlign: "justify",
    [theme.breakpoints.up("xs")]: {
      fontSize: 18,
      paddingBottom: 5,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 18,
    },
  },
  //Carousel
  carousel: {
    display: "flex",
    alignItems: "center",

    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {
      width: "95%",
      height: "100%",
      marginTop: 20,
      marginBottom: 20,
    },
    [theme.breakpoints.up("sm")]: {
      width: "95%",
      height: "100%",
      marginTop: 20,
      marginBottom: 20,
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      height: "90%",
    },
  },
  carouselItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",

    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
      marginLeft: "0.5rem",
      marginRight: "0.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
  coinImage: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "center",
    justifyContent: "flex-start",

    [theme.breakpoints.up("xs")]: {
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.up("sm")]: {
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: 40,
      width: "auto",
      height: "35%",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: 40,
      width: "auto",
      height: "40%",
    },
  },
  coinDetails: {
    display: "flex",
    flexDirection: "column",
    textTransform: "uppercase",
    color: "white",

    [theme.breakpoints.up("xs")]: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: 23,
      width: "60%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 15,
      width: "60%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
  coinHighlight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
    width: "100%",
  },
  coinInfo: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
    },
    [theme.breakpoints.up("lg")]: {
      justifyContent: "flex-start",
    },
  },
  //Carousel Texts
  coinTitle: {
    margin: 10,
    fontWeight: 600,
    fontFamily: "Antonio",
    color: "#a9aaa9",
    letterSpacing: "0.5rem",

    [theme.breakpoints.up("xs")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 40,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 55,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 66,
    },
  },
  coinPrice: {
    fontWeight: 500,
    fontFamily: "Antonio",
    color: "black",
    marginLeft: 5,

    [theme.breakpoints.up("xs")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 35,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 45,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 55,
    },
  },
  coinChange: {
    fontWeight: 600,
    fontFamily: "Antonio",
    marginRight: 5,

    [theme.breakpoints.up("xs")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 35,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 45,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 55,
    },
  },
  volTitle: {
    width: "40%",
    marginLeft: 5,
    display: "flex",
    color: "#a9aaa9",
    fontFamily: "Antonio",

    [theme.breakpoints.up("xs")]: {
      fontSize: 18,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 24,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
    },
  },
  coinVol: {
    width: "60%",
    marginRight: 5,
    display: "flex",
    fontFamily: "Antonio",
    color: "black",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",

    [theme.breakpoints.up("xs")]: {
      fontSize: 17,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 24,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
    },
  },
  capitalTitle: {
    width: "40%",
    marginLeft: 5,
    display: "flex",
    color: "#a9aaa9",
    fontFamily: "Antonio",

    [theme.breakpoints.up("xs")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 24,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
    },
  },
  capital: {
    width: "60%",
    marginRight: 5,
    display: "flex",
    fontFamily: "Antonio",
    color: "black",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      fontSize: 17,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 24,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
    },
  },
}));

//---------------------------------------------------------------------------
//export
export { useStyles };
