import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
  Container,
} from "@material-ui/core";
import "chart.js/auto";
import { Typography } from "@material-ui/core";
import { useSearchParams } from "react-router-dom";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const GbpUsd = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [flag, setflag] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const forex = searchParams.get("forex")
    ? searchParams.get("forex")
    : "frxGBPUSD";

  const useStyles = makeStyles((theme) => ({
    mainContainer: {
      display: "flex",
      width: "100%",
      backgroundColor: "#f2f2f2",
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
    },
    contContainer: {
      display: "flex",
      flexDirection: "column",
      width: "60%",
      margin: 50,
      [theme.breakpoints.down("lg")]: {
        width: "80%",
        margin: 40,
      },
      [theme.breakpoints.down("md")]: {
        width: "90%",
        margin: 10,
      },
      [theme.breakpoints.down("sm")]: {
        margin: 0,
        marginTop: 30,
      },
    },
    titleContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    title: {
      color: "black",
      fontFamily: "antonio",
      fontWeight: 550,
      fontSize: 40,
      letterSpacing: 2,
      lineHeight: 1,
    },
    subtitle: {
      fontFamily: "garamond",
      lineHeight: 1,
      marginTop: 20,
      fontSize: 20,
      color: "#444",
    },
    forexContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
      paddingTop: 30,
      paddingBottom: 30,
    },
    listContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "flex-start",
      justifyContent: "center",
      marginTop: -5,
      padding: "0px 0px 20px 40px",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      [theme.breakpoints.down("md")]: {
        padding: "0px 0px 10px 20px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "0px 10px 5px 10px",
      },
    },
    listDescription: {
      color: "#233C25",
      fontFamily: "Antonio",
      fontSize: 22,
      padding: 20,
    },
    forexList: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "space-between",
      flexWrap: "wrap",
      width: "15%",
      height: 200,
    },
    forexItem: {
      width: "100%",
      color: "#666",
      cursor: "pointer",
      textAlign: "center",
      fontSize: 20,
      padding: 3,
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      "&:hover": {
        fontSize: 21,
        fontWeight: 550,
        color: "black",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: 18,
        margin: 4,
        display: "flex",
        justifyContent: "center",
        "&:hover": {
          fontSize: 19,
          fontWeight: 350,
        },
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 15,
        margin: 4,
        "&:hover": {
          fontSize: 15,
        },
      },
    },
    container: {
      width: "80%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
      marginBottom: 30,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        margin: 0,
      },
    },
    textContainer: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      color: "black",
      fontFamily: "antonio",
      textAlign: "center",
      padding: "50px 0px",
      [theme.breakpoints.down("md")]: {
        padding: "20px 0px",
      },
    },
    containerLabel: {
      fontFamily: "antonio",
      fontSize: 40,
      fontWeight: 550,
      width: "90%",
      lineHeight: 1.4,
      [theme.breakpoints.down("md")]: {
        fontSize: 30,
      },
    },
    containerPrice: {
      fontFamily: "antonio",
      fontSize: 20,
      width: "90%",
      lineHeight: 1.4,
      color: "#000",
    },
    openList: {
      display: "flex",
      width: "100%",
      borderRadius: 10,
      color: "#000",
      cursor: "pointer",
      textAlign: "center",
      padding: "10px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 3px 10px #cec6ce",
      fontSize: 20,
      fontFamily: "Antonio",
      "&:hover": {
        fontWeight: 550,
      },
      "&:active": {
        backgroundColor: "#d4dad4",
        color: "#333",
      },
    },
  }));

  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  function EpochToDate(epoch) {
    if (epoch < 10000000000) epoch *= 1000; // convert to milliseconds (Epoch is usually expressed in seconds, but Javascript uses Milliseconds)
    var epoch = epoch + new Date().getTimezoneOffset() * -1;
    var date = new Date(epoch); //for timeZone
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    var time = hours + ":" + minutes + ":" + seconds;
    return time;
  }

  // current date to be displayed at tooltip
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  var date = today.getDate();
  var day = today.getDay();
  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  if (date < 10) {
    date = "0" + date;
  }
  const monthOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var formatDate =
    dayOfWeek[day] + " " + date + " " + monthOfYear[month] + " " + year;

  // tick stream data status
  const [price, setPrice] = useState([]);
  const [tick, setTick] = useState([]);
  const [ask, setAsk] = useState([]);
  const [bid, setBid] = useState([]);

  // Error message when market closed on weekends, or when Deriv API not working
  const [marketStatus, setMarketStatus] = useState();

  var lineChart = {
    labels: tick,
    datasets: [
      {
        data: price,
        label: `Tick Stream for ${forex}`,
        color: "black",
        borderColor: "#174f1a",
      },
    ],
  };

  // chart display configuration
  var chartOptions = {
    responsive: true,
    showLine: true,
    showtooltip: true,
    animations: {
      borderWidth: { duration: 3000, from: 1, to: 3 },
      borderColor: {
        type: "color",
        duration: 3000,
        from: "grey",
        to: "#174f1a",
      },
    },
    animation: {
      duration: "speed * 1.5",
      easing: "linear",
    },
    elements: {
      line: {
        tension: 0.5,
      },
      point: {
        pointStyle: "circular",
        radius: 5,
        pointHoverRadius: 10,
      },
    },
    interaction: {
      mode: "nearest",
      intersect: false,
    },
    scale: {
      x: {
        min: tick[tick.length - 11],
        max: tick[tick.length - 1],
      },
      y: {
        afterDataLimits(scale) {
          // add 5% to both ends of range
          var range = scale.max - scale.min;
          var grace = range * 0.05;
          scale.max += grace;
          scale.min -= grace;
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          title: function (context) {
            return `${formatDate}, ${context[0].label}`;
          },
          label: function (context) {
            return `Price: ${context.parsed.y}`;
          },
        },
      },
    },
  };

  // receive data via websocket
  var api_call = "wss://ws.binaryws.com/websockets/v3?app_id=1089";
  useEffect(() => {
    var ws = new WebSocket(api_call);
    ws.onopen = (evt) => {
      ws.send(
        JSON.stringify({
          ticks_history: forex,
          adjust_start_time: 1,
          count: 10,
          end: "latest",
          start: 1,
          style: "ticks",
        }),
      );
      ws.send(JSON.stringify({ ticks: forex }));
      ws.send(
        JSON.stringify({
          active_symbols: "brief",
        })
      );
    };

    ws.onmessage = function (evt) {
      var data = JSON.parse(evt.data);
      if (data.history != null) {
        var tickHist = data.history;
        setHistoricData(tickHist);
        for (let i = 0; i < 10; i++) {
          setTick((currentTick) => [
            ...currentTick,
            EpochToDate(tickHist.times[i]),
          ]);
        }
        // console.log("ticks: %o", tick);
        setPrice(tickHist.prices);
        setflag(true);
      }
      if (data.tick != null) {
        var tickInfo = data.tick;
        // console.log(tickInfo);
        if (tickInfo.quote != null && tickInfo.epoch != null) {
          setTick((currentTick) => [
            ...currentTick,
            EpochToDate(tickInfo.epoch),
          ]);
          setPrice((currentPrice) => [...currentPrice, tickInfo.quote]);
          setAsk((currentAsk) => [...currentAsk, tickInfo.ask]);
          setBid((currentBid) => [...currentBid, tickInfo.bid]);
        }
      }
      // when market close
      if (data.error != null) {
        setMarketStatus(() => {
          return (
            <Typography
              style={{
                color: "red",
                fontStyle: "italic",
                marginLeft: "auto",
                fontWeight: 550,
                lineHeight: 1.4,
                padding: 5,
              }}
            >
              Important notice! Market is closed at the moment. Data displayed
              is the last active market data before closing.
            </Typography>
          );
        });
      }

      // when market open but Deriv API not responding
      if (!data.error && !data) {
        setMarketStatus(() => {
          return (
            <Typography
              style={{
                color: "#FF5F1F",
                fontStyle: "italic",
                marginLeft: "auto",
                fontWeight: 550,
                lineHeight: 1.4,
                padding: 5,
              }}
            >
              Slow data update due to server maintenance. Please come back in a
              while.
            </Typography>
          );
        });
      }

      // get market for scrollbar
      var active_symbol = data.active_symbols;
      if (active_symbol != null) {
        for (let marSym of active_symbol) {
          if (marSym.symbol_type === "forex") {
            setForexSymbols((currentSymbols) => [
              ...currentSymbols,
              marSym.symbol,
            ]);
            setDisplayNames((currentNames) => [
              ...currentNames,
              marSym.display_name,
            ]);
          }
        }
      }
    };

    return () => ws.close();
  }, []);

  // array for dropdown
  const [forexSymbols, setForexSymbols] = useState([]);
  const [displayNames, setDisplayNames] = useState([]);
  let displayName = "";

  const forexList = forexSymbols.map((forexSymbol, key) => {
    if (forexSymbol === forex) {
      displayName = displayNames[key];
    }
    return (
      <div
        onClick={() => {
          window.location.href = `/forex?forex=${forexSymbol}`;
        }}
        className={classes.forexItem}
        key={key}
      >
        {displayNames[key]}
      </div>
    );
  });

  const [openList, setOpenList] = useState(false);
  const [openColor, setOpenColour] = useState("#abb6ab");

  const changeButtonColor = () => {
    if (openColor === "#abb6ab") {
      setOpenColour("#637363");
    }
    if (openColor === "#637363") {
      setOpenColour("#abb6ab");
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.mainContainer}>
        <div className={classes.contContainer}>
          <div className={classes.titleContainer}>
            <Typography className={classes.title}>
              Forex Currency Pairs
            </Typography>

            <Typography className={classes.subtitle}>
              Forex trades 24 hours a day, five days a week. With Forex, traders
              have the luxury of highly leveraged trading with lower margin
              requirements than in equity markets.
            </Typography>
          </div>
          <div className={classes.forexContainer}>
            <div
              className={classes.openList}
              style={{ backgroundColor: openColor }}
              onClick={() => {
                setOpenList(!openList);
                changeButtonColor();
              }}
            >
              View All Forex Pairs &nbsp;&nbsp;
              <KeyboardDoubleArrowDownIcon className={classes.icon} />
            </div>

            {openList && (
              <SlideDown className={classes.listContainer}>
                <Typography className={classes.listDescription}>
                  Select a forex pair to view its real-time chart.
                </Typography>
                <div className={classes.forexList}>{forexList}</div>
              </SlideDown>
            )}

            <div className={classes.textContainer}>
              <Typography className={classes.containerLabel} variant="h3">
                {displayName}
              </Typography>
              <Typography className={classes.containerPrice} variant="h3">
                {"Real time price: "}
                <span style={{ color: "green" }}>
                  {price[price.length - 1]}
                </span>
              </Typography>
              <Typography className={classes.containerPrice} variant="h3">
                {"Ask: "}
                {ask[ask.length - 1]}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"Bid: "}
                {bid[bid.length - 1]}
              </Typography>
            </div>
            {marketStatus}
            <div className={classes.container}>
              {!historicData | (flag === false) ? (
                <CircularProgress
                  style={{ color: "#c6cec6" }}
                  size={250}
                  thickness={1}
                />
              ) : (
                <>
                  <Line data={lineChart} options={chartOptions}></Line>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default GbpUsd;
