import React from "react";
import { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { db } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";
import { CircularProgress } from "@material-ui/core";
import stone from "../../media/stone.png";

const useStyles = makeStyles((theme) => ({
  feedbackContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: "40px 0px 60px 0px",
    flexWrap: "wrap",
  },
  titleContainer: {
    display: "flex",
    width: "90%",
    justifyContent: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Antonio",
    fontWeight: 550,
    letterSpacing: 3,
    margin: "10px 0px 50px 0",
    [theme.breakpoints.down("md")]: {
      fontSize: 35,
    },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: 25,
    // },
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: 20,
    // },
  },
  subtitle: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Antonio",
    fontWeight: 550,
    letterSpacing: 3,
    color: "#f5d171",
    [theme.breakpoints.down("md")]: {
      fontSize: 35,
    },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: 25,
    // },
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: 20,
    // },
  },
  wrapContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 20px",
    backgroundImage: `url(${stone}), linear-gradient(315deg, #fceabb, #ba8b02, #000000 100%)`,
    backgroundPosition: "center",
    backgroundSize: "400%",
    backgroundRepeat: "no-repeat",
    borderRadius: 25,
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    flex: 2,
  },
  text: {
    margin: "50px",
    fontFamily: "Antonio",
    [theme.breakpoints.down("md")]: {
      margin: "30px",
    },
  },
  topText: {
    fontSize: 22,
    fontFamily: "Antonio",
    textAlign: "center",
    fontWeight: 550,

    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  wrapRating: {
    padding: "20px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 70,
    textAlign: "center",
    fontFamily: "Antonio",
    fontWeight: 550,
    color: "#f5d171",
    [theme.breakpoints.down("md")]: {
      fontSize: 55,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 45,
    },
  },
  ratingContext: {
    fontSize: 20,
    fontFamily: "Antonio",
    textAlign: "center",
    fontWeight: 550,
    color: "#f5d171",
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
}));
const FormRating = () => {
  const [averageUX, setAverageUX] = useState(0);
  const [averageUI, setAverageUI] = useState(0);
  const [feedbacks, setFeedbacks] = useState(0);
  const [loading, setLoading] = useState(true);
  const aveRate = async () => {
    const formRef = collection(db, "formlist");
    var totalUX = 0;
    var totalUI = 0;
    var count = 0;
    try {
      const querySnapshot = await getDocs(formRef);
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        totalUX += docData["uxRating"];
        totalUI += docData["uiRating"];

        count++;
      });
      const resultUX = totalUX / count;
      const resultUI = totalUI / count;
      setFeedbacks(count);
      setAverageUX(resultUX.toFixed(1));
      setAverageUI(resultUI.toFixed(1));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    aveRate();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.feedbackContainer}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title} variant="h4">
          FEEDBACK COUNT:
          {loading ? (
            <CircularProgress
              style={{ color: "#c6cec6" }}
              size={50}
              thickness={1}
            />
          ) : (
            <Typography className={classes.subtitle} variant="h4">
              {feedbacks}
            </Typography>
          )}
        </Typography>
      </div>
      <div className={classes.wrapContainer}>
        <div className={classes.ratingContainer}>
          <div className={classes.text}>
            <Typography className={classes.topText}>RATED</Typography>
            <div className={classes.wrapRating}>
              {loading ? (
                <CircularProgress
                  style={{ color: "#c6cec6" }}
                  size={100}
                  thickness={1}
                />
              ) : (
                <Typography className={classes.ratingText}>
                  {averageUX}
                </Typography>
              )}
              <Typography className={classes.ratingContext}>
                out of 5
              </Typography>
            </div>
            <Typography className={classes.topText}>
              for user experience
            </Typography>
          </div>
        </div>
        <div className={classes.ratingContainer}>
          <div className={classes.text}>
            <Typography className={classes.topText}>RATED</Typography>
            <div className={classes.wrapRating}>
              {loading ? (
                <CircularProgress
                  style={{ color: "#c6cec6" }}
                  size={100}
                  thickness={1}
                />
              ) : (
                <Typography className={classes.ratingText}>
                  {averageUI}
                </Typography>
              )}

              <Typography className={classes.ratingContext}>
                out of 5
              </Typography>
            </div>
            <Typography className={classes.topText}>
              for website design
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRating;
