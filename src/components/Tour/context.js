import { useContext, createContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
import toursData from '../../data'
import paginate from './util'

const AppContext = createContext()

const initialState = {
  data: [],
  isLoading: true,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const paginated = paginate(toursData)
  useEffect(() => {
    dispatch({ type: 'LOADING' })
    dispatch({ type: 'DISPLAY_ITEM', payload: paginated })
  }, [])

  const remove = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  return (
    <AppContext.Provider value={{ ...state, remove }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
