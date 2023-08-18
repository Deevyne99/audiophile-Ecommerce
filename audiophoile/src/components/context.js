import React, { useContext, useReducer, useEffect, useState } from 'react'
import { links } from '../data'
import { products } from '../data'
import reducer from './reducer'
const AppContext = React.createContext()
const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}
const initialState = {
  links: links,
  isSidebarOpen: false,
  allProducts: [],
  loading: false,
  filteredProducts: [],
  single_product: {},
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 50,
  isCartOpen: false,
}
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [amount, setAmount] = React.useState(1)
  const toggleSideBar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }
  const getProducts = (category) => {
    // dispatch({ type: 'FILTER_LOADING' })
    dispatch({ type: 'GET_PRODUCTS', payload: category })
    // dispatch({ type: 'FETCH_PRODUCTS_SUCCESSFUL' })
  }
  const getAllProducts = () => {
    dispatch({ type: 'GET_ALL_PRODUCTS', payload: products })
  }
  const singleProduct = (id) => {
    dispatch({ type: 'GET_SINGLE_PRODUCT', payload: id })
  }
  const ClearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  const increaseAmount = () => {
    setAmount((oldAmount) => oldAmount + 1)
  }
  const decreaseAmount = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (oldAmount === 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }
  const AddToCart = (id, product, amount) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, product, amount } })
    setAmount(1)
    console.log(state.cart)
  }
  const OpenCart = () => {
    dispatch({ type: 'OPEN_CART' })
  }
  const increaseCart = (id) => {
    dispatch({ type: 'INCREASE_AMOUNT', payload: id })
  }
  const decreaseCart = (id) => {
    dispatch({ type: 'DECREASE_AMOUNT', payload: id })
  }
  useEffect(() => {
    getAllProducts()
  }, [])
  useEffect(() => {
    dispatch({ type: 'COUNT_CART_TOTAL' })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])
  const clearCartItems = () => {
    dispatch({ type: 'CLEAR_CART_ITEMS' })
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSideBar,
        getProducts,
        singleProduct,
        increaseAmount,
        decreaseAmount,
        amount,
        AddToCart,
        OpenCart,
        ClearCart,
        increaseCart,
        decreaseCart,
        clearCartItems,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
