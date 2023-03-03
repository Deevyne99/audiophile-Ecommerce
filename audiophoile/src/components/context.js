import React, { useContext, useReducer, useEffect, useState } from 'react'
import { links } from '../data'
import reducer from './reducer'
const AppContext = React.createContext()
const initialState = {
  links: links,
  isSidebaropen: false,
}
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(links)
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
