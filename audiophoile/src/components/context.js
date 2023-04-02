import React, { useContext, useReducer, useEffect, useState } from 'react'
import { links } from '../data'
import { products } from '../data'
import reducer from './reducer'
const AppContext = React.createContext()
const initialState = {
  links: links,
  isSidebarOpen: false,
  allProducts: [],
  loading: false,
  filteredProducts: [],
  single_product: {},
}
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

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

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <AppContext.Provider
      value={{ ...state, toggleSideBar, getProducts, singleProduct }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
