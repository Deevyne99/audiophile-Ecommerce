const reducer = (state, action) => {
  if (action.type === 'TOGGLE_SIDEBAR') {
    return { ...state, isSidebarOpen: !state.isSidebarOpen }
  }
  if (action.type === 'GET_ALL_PRODUCTS') {
    return {
      ...state,
      allProducts: action.payload,
    }
  }
  // if ('FILTER_LOADING') {
  //   return { ...state, loading: true }
  // }
  if (action.type === 'GET_PRODUCTS') {
    const tempProducts = state.allProducts.filter(
      (item) => item.Category === action.payload
    )
    // console.log(tempProducts)
    return {
      ...state,
      filteredProducts: tempProducts,
      loading: false,
    }
  }
  // if ('FETCH_PRODUCTS_SUCCESSFUL') {
  //   return { ...state, loading: false }
  // }
  throw new Error(`No Matching "${action.type}" - action type`)
}
export default reducer
