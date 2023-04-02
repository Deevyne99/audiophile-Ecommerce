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

  if (action.type === 'GET_PRODUCTS') {
    const tempProducts = state.allProducts.filter(
      (item) => item.Category === action.payload
    )

    return {
      ...state,
      filteredProducts: tempProducts,
      loading: false,
    }
  }
  if (action.type === 'GET_SINGLE_PRODUCT') {
    const tempProduct = state.allProducts.find(
      (item) => item.id === Number(action.payload)
    )
    return {
      ...state,
      single_product: tempProduct,
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}
export default reducer
