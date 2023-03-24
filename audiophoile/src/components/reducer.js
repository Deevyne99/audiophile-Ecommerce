const reducer = (state, action) => {
  if (action.type === 'TOGGLE_SIDEBAR') {
    return { ...state, isSidebarOpen: !state.isSidebarOpen }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}
export default reducer
