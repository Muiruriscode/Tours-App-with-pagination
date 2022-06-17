import paginate from './util'

const reducer = (state, action) => {
  if (action.type === 'DISPLAY_ITEM') {
    return { ...state, data: action.payload, isLoading: false }
  }
  if (action.type === 'LOADING') {
    return { ...state, isLoading: true }
  }
  if (action.type === 'REMOVE_ITEM') {
    const tours = state.data.flat()
    const newTours = tours.filter((item) => item.id !== action.payload)

    return { ...state, data: paginate(newTours) }
  }
  throw new Error('No matching action type')
}

export default reducer
