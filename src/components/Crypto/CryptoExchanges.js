//---------------------------------------------------------------------------
//imports
import React from "react";
import { GetExchanges } from "../../config/api";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TableContainer,
  LinearProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
} from "@material-ui/core";
import { CryptoState } from "../../CryptoContext";

//---------------------------------------------------------------------------
//CryptoExchange component structure
const CryptoExchanges = () => {
  //Variables and states
  const [exchanges, setExchanges] = useState([]);

  //API call
  const fetchCoin = async () => {
    const { data } = await axios.get(GetExchanges());
    setExchanges(data);
  };
  useEffect(() => {
    fetchCoin();
  }, []);
  const { symbol, loading } = CryptoState();

  //Styling and responsiveness
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      marginBottom: 20,
      padding: 0,
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
    title: {
      margin: " 20px 0px 20px 0px",
      fontFamily: "antonio",
      fontWeight: "bold",
      width: "100%",
      color: "white",
      textTransform: "uppercase",
      textAlign: "start",
      fontSize: 45,
      letterSpacing: 3,
      lineHeight: 1,
      [theme.breakpoints.up("xs")]: {
        fontSize: "30px",
      },
      [theme.breakpoints.up("sm")]: { fontSize: "35px" },
      [theme.breakpoints.up("md")]: { fontSize: "40px" },
      [theme.breakpoints.up("lg")]: { fontSize: "45px" },
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "black",
        fontFamily: "antonio",
        marginBottom: 10,
      },
    },
    TableContainer: {
      display: "flex",
      backgroundColor: "#f2f2f2",
      borderRadius: 40,
      textAlign: "center",
      paddingTop: 40,
    },
    tableContainer: {
      margin: "15px 0px",
      borderRadius: 30,
      boxShadow: "0px 2px 2px 1px #aaa",
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
    },

    tableHead: {
      backgroundColor: "white",
      textAlign: "center",
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
      "&:hover": {
        backgroundColor: "#f2f2f2",
        boxShadow: "0px 4px 4px 1px #f2f2f2",
      },
    },
    link: {
      color: "blue",
      textDecoration: "underline",
      cursor: "pointer",
      "&:hover": {
        color: "#0645AD",
      },
      "&:visited": {
        color: "#0B0080",
      },
      "&:active": {
        color: "purple",
      },
    },
  }));

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} variant="h3">
        Top 5 Exchanges for Cryptocurrencies
      </Typography>
      <TableContainer className={classes.tableContainer}>
        {loading ? (
          <LinearProgress style={{ backgroundColor: "gold" }} />
        ) : (
          <Table>
            {/* Table Head */}
            <TableHead>
              <TableRow>
                {["Name", "Year Established", "URL"].map((head) => (
                  <TableCell
                    className={classes.tableHead}
                    key={head}
                    align={head === "Name" ? "left" : "right"}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {exchanges.map((row) => {
                return (
                  <TableRow className={classes.row} key={row.name}>
                    {/* Coin Logo */}
                    <TableCell
                      className={classes.nameColumn}
                      component="th"
                      scope="row"
                      style={{
                        display: "flex",
                        fontSize: 20,
                        fontFamily: "Antonio",
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

                      {/*  Coin Name */}

                      <div
                        style={{
                          width: "50%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        {row.name}
                      </div>
                    </TableCell>

                    {/* Year Established Column */}
                    <TableCell
                      align="right"
                      style={{
                        fontWeight: 500,
                        fontFamily: "antonio",
                        fontSize: 20,
                        textAlign: "center",
                      }}
                    >
                      {row?.year_established}
                    </TableCell>
                    {/* URL Column */}
                    <TableCell
                      style={{
                        paddingRight: 40,
                        fontFamily: "antonio",
                        fontSize: 20,
                        textAlign: "start",
                      }}
                      align="right"
                    >
                      <a
                        href={row.url}
                        className={classes.link}
                        target={"_blank"}
                      >
                        {row.url}
                      </a>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Container>
  );
};

//---------------------------------------------------------------------------
//export
export default CryptoExchanges;
