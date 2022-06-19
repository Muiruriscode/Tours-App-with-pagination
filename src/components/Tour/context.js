import { useContext, createContext, useReducer, useEffect } from 'react'
import axios from 'axios'
import reducer from './reducer'
import paginate from './util'

const AppContext = createContext()
const url = 'https://course-api.com/react-tours-project'
const initialState = {
  data: [],
  isLoading: true,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'LOADING' })
    const getData = async () => {
      const { data } = await axios(url)
      console.log(data)
      dispatch({ type: 'DISPLAY_ITEM', payload: paginate(data) })
    }
    getData()
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
