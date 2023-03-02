import React, { useContext, useReducer, useEffect, useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={'hello'}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
