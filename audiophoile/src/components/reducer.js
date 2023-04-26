const reducer = (state, action) => {
  if (action.type === 'TOGGLE_SIDEBAR') {
    return { ...state, isSidebarOpen: !state.isSidebarOpen, isCartOpen: false }
  }
  if (action.type === 'GET_ALL_PRODUCTS') {
    return {
      ...state,
      allProducts: action.payload,
    }
  }

  if (action.type === 'GET_PRODUCTS') {
    let tempProducts = []

    tempProducts = state.allProducts.filter(
      (item) => item.Category === action.payload
    )
    // console.log(tempProducts)
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
  if (action.type === 'ADD_TO_CART') {
    const { id, product, amount } = action.payload
    const tempProduct = state.cart.find((item) => item.id === id)
    if (tempProduct) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })
      return { ...state, cart: tempCart }
    } else {
      const newItem = {
        id,
        name: product.name,
        price: product.price,
        img: product.img,
        amount,
      }
      // console.log(newItem)
      return {
        ...state,
        cart: [...state.cart, newItem],
      }
    }
  }
  if (action.type === 'COUNT_CART_TOTAL') {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem
        console.log(amount)
        total.total_items += amount
        total.total_amount += price * amount
        return total
      },
      { total_amount: 0, total_items: 0 }
    )
    return { ...state, total_items, total_amount }
  }
  if (action.type === 'OPEN_CART') {
    return { ...state, isCartOpen: !state.isCartOpen, isSidebarOpen: false }
  }
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}
export default reducer
