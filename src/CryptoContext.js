import React from 'react'
import { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { CoinList } from './config/api'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './firebase'
import { doc } from '@firebase/firestore'
import { onSnapshot } from 'firebase/firestore'

const Crypto = createContext()

const CryptoContext = ({ children }) => {
  const [currency, setcurrency] = useState('USD')
  const [symbol, setsymbol] = useState('$')
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    type: 'success',
  })
  const [favoriteslist, setFavoriteslist] = useState([])
  useEffect(() => {
    if (user) {
      const coinRef = doc(db, 'favoriteslist', user.uid)

      var unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          console.log(coin.data().coins)
          setFavoriteslist(coin.data().coins)
        } else {
          console.log('No Items in Watchlist')
        }
      })

      return () => {
        unsubscribe()
      }
    }
  }, [user])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user)
      else setUser(null)

      console.log(user)
    })
  }, [])

  const fetchCoins = async () => {
    setLoading(true)
    const { data } = await axios.get(CoinList(currency))
    console.log(data)

    setCoins(data)
    setLoading(false)
  }

  useEffect(() => {
    if (currency === 'USD') setsymbol('$')
    else if (currency === 'MYR') setsymbol('RM')
  }, [currency])

  return (
    <Crypto.Provider
      value={{
        currency,
        symbol,
        setcurrency,
        coins,
        loading,
        fetchCoins,
        alert,
        setAlert,
        user,
        favoriteslist,
      }}
    >
      {children}
    </Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState = () => {
  return useContext(Crypto)
}
