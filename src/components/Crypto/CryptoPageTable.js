//---------------------------------------------------------------------------
//imports
import React from "react";
import { CryptoState } from "../../CryptoContext";
import { useEffect } from "react";
import { useState } from "react";
import {
  createTheme,
  Container,
  Typography,
  TextField,
  TableContainer,
  LinearProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@material-ui/lab";

//adding commas to seperate groups of thousands
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//CoinsTable component structure
const CoinsTable = () => {
  //Variables and states
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { currency, symbol, coins, loading, fetchCoins } = CryptoState();
  const history = useNavigate();

  //theme for dark mode
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  //searchbar validation
  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase()) ||
        coin.name.toUpperCase().includes(search.toUpperCase()) ||
        coin.symbol.toUpperCase().includes(search.toUpperCase())
    );
  };

  //coin update
  useEffect(() => {
    fetchCoins();
  }, [currency]);

  //Styling and responsiveness
  const useStyles = makeStyles((theme) => ({
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "black",
        fontFamily: "antonio",
        marginBottom: 10,
      },
      [theme.breakpoints.up("xs")]: {
        flexWrap: "nowrap",
      },
    },
    TableContainer: {
      backgroundColor: "#f2f2f2",
      borderRadius: 40,
      textAlign: "center",
      paddingTop: 40,
      width: "100%",

      [theme.breakpoints.up("xs")]: {
        width: "90%",
      },
      [theme.breakpoints.up("sm")]: {
        width: "90%",
      },
      [theme.breakpoints.up("md")]: {
        width: "90%",
      },
    },
    contTitle: {
      margin: " 0px 0px 20px 0px",
      fontFamily: "antonio",
      fontWeight: "bold",
      color: "black",
      textTransform: "uppercase",
      textAlign: "start",
      fontSize: 45,
      letterSpacing: 5,
      lineHeight: 1,
      [theme.breakpoints.up("xs")]: {
        fontSize: "30px",
      },
      [theme.breakpoints.up("sm")]: { fontSize: "35px" },
      [theme.breakpoints.up("md")]: { fontSize: "40px" },
      [theme.breakpoints.up("lg")]: { fontSize: "45px" },
    },
    priceColumn: {
      fontFamily: "antonio",
      fontSize: 22,
      [theme.breakpoints.up("xs")]: { fontSize: "14.5px", paddingRight: 40 },
      [theme.breakpoints.up("sm")]: { fontSize: "14.5px" },
      [theme.breakpoints.up("md")]: { fontSize: "17px", paddingRight: 20 },
      [theme.breakpoints.up("lg")]: { fontSize: "22px" },
    },
    dailyChangeColumn: {
      fontWeight: 500,
      fontFamily: "antonio",
      fontSize: 22,
      [theme.breakpoints.up("xs")]: { fontSize: "14.5px", paddingRight: 40 },
      [theme.breakpoints.up("sm")]: { fontSize: "14.5px" },
      [theme.breakpoints.up("md")]: { fontSize: "17px", paddingRight: 20 },
      [theme.breakpoints.up("lg")]: { fontSize: "22px" },
    },
    circulatingSupplyColumn: {
      paddingRight: 40,
      fontFamily: "antonio",
      fontSize: 22,
      [theme.breakpoints.up("xs")]: { fontSize: "14.5px", paddingRight: 40 },
      [theme.breakpoints.up("sm")]: { fontSize: "14.5px" },
      [theme.breakpoints.up("md")]: { fontSize: "17px", paddingRight: 20 },
      [theme.breakpoints.up("lg")]: { fontSize: "22px" },
    },
    marketCapColumn: {
      paddingRight: 40,
      fontFamily: "antonio",
      fontSize: 22,
      [theme.breakpoints.up("xs")]: { fontSize: "14.5px", paddingRight: 40 },
      [theme.breakpoints.up("sm")]: { fontSize: "14.5px" },
      [theme.breakpoints.up("md")]: { fontSize: "17px", paddingRight: 20 },
      [theme.breakpoints.up("lg")]: { fontSize: "22px" },
    },
    overallVolumeColumn: {
      paddingRight: 40,
      fontFamily: "antonio",
      fontSize: 22,
      [theme.breakpoints.up("xs")]: { fontSize: "14.5px", paddingRight: 40 },
      [theme.breakpoints.up("sm")]: { fontSize: "14.5px" },
      [theme.breakpoints.up("md")]: { fontSize: "17px", paddingRight: 20 },
      [theme.breakpoints.up("lg")]: { fontSize: "22px" },
    },
    contSearch: {
      backgroundColor: "black",
      boxShadow: "0px 2px 2px 1px #aaa",
      marginBottom: 20,
      width: "100%",
    },
    tableHead: {
      backgroundColor: "white",
      fontFamily: "antonio",
      color: "black",
      fontSize: 24,
      fontWeight: "700",
      textTransform: "uppercase",
      padding: " 20px 40px",
    },
    row: {
      backgroundColor: "white",
      fontFamily: "antonio",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#f2f2f2",
        boxShadow: "0px 4px 4px 1px #f2f2f2",
      },
    },
    noMatch: {
      width: "100%",
      fontStyle: "italic",
      fontFamily: "Antonio",
      color: "#777",
      margin: "30px 0px 30px 0px",
    },
  }));

  const classes = useStyles();

  return (
    <Container className={classes.TableContainer}>
      {/* Container Title */}
      <Typography className={classes.contTitle} variant="h4">
        Overall Cryptocurrency Prices
      </Typography>

      <TextField
        className={classes.contSearch}
        label="Search For a Crypto Coin"
        variant="filled"
        InputLabelProps={{
          style: {
            color: "black",
            fontFamily: "antonio",
            padding: "0px 50px",
          },
        }}
        style={{
          fontFamily: "antonio",
          backgroundColor: "#fff",
          borderRadius: 40,
          padding: "0px 50px",
        }}
        InputProps={{
          style: {
            color: "black",
            fontFamily: "antonio",
          },
        }}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table Container */}
      <TableContainer
        style={{
          margin: "15px 0px",
          borderRadius: 30,
          boxShadow: "0px 2px 2px 1px #aaa",
        }}
      >
        {loading ? (
          <LinearProgress style={{ backgroundColor: "gold" }} />
        ) : (
          <Table>
            {/* Table Head */}
            <TableHead>
              <TableRow>
                {[
                  "Coin",
                  "Price",
                  "24h Change",
                  "Circulating Supply",
                  "Market Cap",
                  "Overall Volume",
                ].map((head) => (
                  <TableCell
                    className={classes.tableHead}
                    key={head}
                    align={head === "Coin" ? "left" : "right"}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {handleSearch()
                .slice((page - 1 - 10) * 10, (page - 1) * 10 + 10)
                .map((row) => {
                  const profit = row.price_change_percentage_24h > 0;

                  return (
                    <TableRow
                      onClick={() => history(`/coins/${row.id}`)}
                      className={classes.row}
                      key={row.name}
                    >
                      {/* Coin Column */}
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          display: "flex",
                          gap: 20,
                        }}
                      >
                        <div
                          style={{
                            width: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img src={row?.image} alt={row.name} height="50" />
                        </div>
                        {/*  Coin Details */}
                        <div
                          style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "antonio",
                              fontWeight: 400,
                              textTransform: "uppercase",
                              fontSize: 22,
                            }}
                          >
                            {row.symbol}
                          </span>
                          <span
                            style={{
                              color: "#a9aaa9",
                              fontFamily: "antonio",
                              fontWeight: 600,
                              textTransform: "uppercase",
                            }}
                          >
                            {row.name}
                          </span>
                        </div>
                      </TableCell>
                      {/* Price Column */}
                      <TableCell className={classes.priceColumn} align="right">
                        {symbol}{" "}
                        {numberWithCommas(row.current_price.toFixed(2))}
                      </TableCell>
                      {/* 24H Change Column */}
                      <TableCell
                        align="right"
                        className={classes.dailyChangeColumn}
                        style={{
                          color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                        }}
                      >
                        {profit && "+"}
                        {row.price_change_percentage_24h.toFixed(2)}%
                      </TableCell>
                      {/* Circulating Supply Column */}
                      <TableCell
                        className={classes.circulatingSupplyColumn}
                        align="right"
                      >
                        {symbol}{" "}
                        {numberWithCommas(row.circulating_supply.toString())}
                      </TableCell>
                      {/* Market Capital Column */}
                      <TableCell
                        className={classes.marketCapColumn}
                        align="right"
                      >
                        {symbol} {numberWithCommas(row.market_cap.toString())}
                      </TableCell>
                      <TableCell
                        className={classes.overallVolumeColumn}
                        align="right"
                      >
                        {symbol} {numberWithCommas(row.total_volume.toString())}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        )}
        {handleSearch().length === 0 ? (
          <Typography className={classes.noMatch}>
            No coins match your search!
          </Typography>
        ) : (
          ""
        )}
      </TableContainer>

      <Pagination
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        classes={{ ul: classes.pagination }}
        count={parseInt((handleSearch()?.length / 10).toFixed(0))}
        onChange={(_, value) => {
          setPage(value);
          window.scroll({ top: 800, behavior: "smooth" });
        }}
      ></Pagination>
    </Container>
  );
};

//---------------------------------------------------------------------------
//export
export default CoinsTable;
