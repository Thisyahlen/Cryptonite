import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { CryptoState } from '../CryptoContext'
import { SingleCoin } from '../config/api'
import { useEffect, useState } from 'react'
import {
  LinearProgress,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core'
import CoinInfo from '../components/Crypto/CoinInfo'
import { numberWithCommas } from '../components/Crypto/CoinsTable.js'
import { doc, setDoc } from '@firebase/firestore'
import { db } from '../firebase'

const Coinpage = () => {
  const { id } = useParams()
  const [coin, setCoin] = useState()
  const { currency, symbol, user, favoriteslist, setAlert } = CryptoState()
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id))
    console.log(data)
    setCoin(data)
  }

  console.log(coin)

  useEffect(() => {
    fetchCoin()
  }, [])

  const useStyles = makeStyles((theme) => ({
    container: {
      // backgroundColor: "green",
      width: '100%',
      // paddingTop: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    contContainer: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      // borderRadius: 40,
      // boxShadow: "0px 4px 4px 2px #aaa",
      backgroundColor: 'white',
      [theme.breakpoints.down('md')]: {
        // backgroundColor: "green",
        width: '100%',
      },
      [theme.breakpoints.down('xs')]: {
        borderRadius: 0,
        // backgroundColor: "blue",
        width: '100%',
      },
    },
    itemsBar: {
      // backgroundColor: "red",
      backgroundColor: '#f2f2f2',
      margin: 30,
      padding: 20,
      width: '1180px',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      // marginTop: 10,
      borderRadius: 30,
      boxShadow: '0px 2px 2px 1px #aaa',
      // borderRight: "2px solid grey",
      [theme.breakpoints.down('md')]: {
        // backgroundColor: "green",
        width: '90%',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        // backgroundColor: "blue",
      },
    },
    coinName: {
      // backgroundColor: "orange",
      width: '20%',
      margin: '0px 100px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',

      [theme.breakpoints.down('md')]: {
        backgroundColor: 'yello/w',
        width: '90%',
        margin: '20px 50px',
      },
      [theme.breakpoints.down('sm')]: {
        // backgroundColor: "green",
        width: '50%',
      },
      [theme.breakpoints.down('xs')]: {
        // backgroundColor: "indigo",
        width: '50%',
      },
    },
    heading: {
      // backgroundColor: "cyan",
      fontWeight: 'bold',
      fontSize: 30,
      // marginBottom: 20,
      color: 'black',
      fontFamily: 'antonio',
      textAlign: 'center',
    },
    headingChild: {
      // backgroundColor: "green",
      fontWeight: 'bold',
      fontSize: 30,
      // marginBottom: 20,
      color: 'black',
      fontFamily: 'antonio',
      textAlign: 'center',
      [theme.breakpoints.down('md')]: {
        // backgroundColor: "yellow",
        fontSize: 24,
      },
      [theme.breakpoints.down('xs')]: {
        // backgroundColor: "red",
        fontSize: 24,
      },
    },
    childContent: {
      // backgroundColor: "indigo",
      color: 'black',
      fontSize: 30,
      fontFamily: 'antonio',
      textAlign: 'center',
      [theme.breakpoints.down('md')]: {
        // backgroundColor: "yellow",
        fontSize: 24,
      },
      [theme.breakpoints.down('xs')]: {
        // backgroundColor: "red",
        fontSize: 24,
      },
    },
    description: {
      // backgroundColor: "indigo",
      color: 'black',
      width: '100%',
      fontFamily: 'garamond',
      fontSize: 20,
      lineHeight: 1,
      margin: '0px 0px',
      padding: '10px 25px',
      textAlign: 'justify',
      [theme.breakpoints.down('md')]: {
        // backgroundColor: "yellow",
        width: '100%',
      },
      [theme.breakpoints.down('xs')]: {
        // backgroundColor: "indigo",
        width: '100%',
      },
    },
    marketData: {
      // backgroundColor: "lightgreen",
      alignSelf: 'start',
      padding: '10px 25px',
      width: '100%',
      color: '#f2f2f2',
      lineHeight: 1,
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '100%',
      },
      [theme.breakpoints.down('xs')]: {
        alignItems: 'start',
        width: '100%',
      },
    },
    graphWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '60%',
      margin: '20px 0px 20px 0px',
      [theme.breakpoints.down('lg')]: {
        width: '80%',
      },
      [theme.breakpoints.down('md')]: {
        width: '90%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '95%',
        margin: 0,
      },
    },
    graphTitle: {
      color: 'black',
      fontSize: 45,
      marginBottom: 10,
      textAlign: 'center',
      fontFamily: 'Antonio',
      fontWeight: 550,
      [theme.breakpoints.down('md')]: {
        fontSize: 40,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 30,
      },
    },
  }))

  const inFavoriteslist = favoriteslist.includes(coin?.id)

  const addToFavorites = async () => {
    const coinRef = doc(db, 'favoriteslist', user.uid)

    try {
      await setDoc(coinRef, {
        coins: favoriteslist ? [...favoriteslist, coin?.id] : [coin?.id],
      })

      setAlert({
        open: true,
        message: `${coin.name} Added to Favorites`,
        type: 'success',
      })
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: 'error',
      })
    }
  }

  const removeFromFavoriteslist = async () => {
    const coinRef = doc(db, 'favoriteslist', user.uid)
    try {
      await setDoc(
        coinRef,
        { coins: favoriteslist.filter((wish) => wish !== coin?.id) },
        { merge: true },
      )

      setAlert({
        open: true,
        message: `${coin.name} Removed from the Favorites !`,
        type: 'success',
      })
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: 'error',
      })
    }
  }

  const classes = useStyles()

  if (!coin)
    return (
      <LinearProgress
        style={{ backgroundColor: '#a9aaa9', color: '#c6cec6' }}
      />
    )

  return (
    <div>
      <div
        style={{
          height: 120,
          backgroundColor: '#c6cec6',
          // zIndex: 1,
          marginTop: -120,
        }}
      ></div>
      <div className={classes.container}>
        <div className={classes.contContainer}>
          {' '}
          <div className={classes.itemsBar}>
            {/* Image and name*/}
            <div className={classes.coinName}>
              <img
                src={coin?.image.large}
                alt={coin?.name}
                height="auto"
                style={{ margin: 10 }}
              />
              <Typography variant="h3" className={classes.heading}>
                {coin?.name}
              </Typography>
            </div>

            <div>
              {/* Rank and etc */}
              <div className={classes.marketData}>
                <span style={{ display: 'flex' }}>
                  <Typography variant="h5" className={classes.headingChild}>
                    Rank:
                  </Typography>
                  &nbsp; &nbsp;
                  {/* Rank */}
                  <Typography className={classes.childContent} variant="h5">
                    {coin?.market_cap_rank != null
                      ? numberWithCommas(coin?.market_cap_rank)
                      : 'No ranking'}
                  </Typography>
                </span>

                <span style={{ display: 'flex' }}>
                  <Typography variant="h5" className={classes.headingChild}>
                    Current Price:
                  </Typography>
                  &nbsp; &nbsp;
                  {/* Current Price */}
                  <Typography className={classes.childContent} variant="h5">
                    {symbol}{' '}
                    {numberWithCommas(
                      coin?.market_data.current_price[
                        currency.toLowerCase()
                      ].toFixed(2),
                    )}
                  </Typography>
                </span>
                <span style={{ display: 'flex' }}>
                  <Typography variant="h5" className={classes.headingChild}>
                    Market Cap:
                  </Typography>
                  &nbsp; &nbsp;
                  {/* Market Cap */}
                  <Typography className={classes.childContent} variant="h5">
                    {symbol}{' '}
                    {numberWithCommas(
                      coin?.market_data.market_cap[currency.toLowerCase()]
                        .toString()
                        .slice(0, -6),
                    )}
                    M
                  </Typography>
                </span>
              </div>
              {/* Description */}
              <Typography variant="subtitle1" className={classes.description}>
                {coin?.description.en
                  .split('. ')[0]
                  .replace(/<\/?[^>]+(>|$)/g, '')}
                .
              </Typography>
              {user && (
                <Button
                  variant="outlined"
                  style={{
                    margin: '0px 25px',
                    marginTop: 10,
                    fontFamily: 'Antonio',
                    fontSize: 20,
                    fontWeight: 600,
                    borderRadius: 30,
                    boxShadow: '0px 4px 4px 2px #aaa',
                    width: '95%',
                    height: '40',
                    backgroundColor: inFavoriteslist ? 'red' : '#49FF00',
                    color: 'black',
                  }}
                  onClick={
                    inFavoriteslist ? removeFromFavoriteslist : addToFavorites
                  }
                >
                  {inFavoriteslist
                    ? 'Remove from Favorites'
                    : 'Add To Favorites'}
                </Button>
              )}
            </div>
          </div>
          {/* Chart */}
          <div className={classes.graphWrapper}>
            <Typography className={classes.graphTitle}>
              {coin.name} ({coin.symbol.toUpperCase()}) to USD Chart
            </Typography>
            <CoinInfo coin={coin} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coinpage
