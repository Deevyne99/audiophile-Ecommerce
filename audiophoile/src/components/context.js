import React, { useContext, useReducer, useEffect, useState } from 'react'
import { links } from '../data'
import reducer from './reducer'
const AppContext = React.createContext()
const initialState = {
  links: links,
  isSidebarOpen: false,
}
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleSideBar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }
  return (
    <AppContext.Provider value={{ ...state, toggleSideBar }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
