import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import appealsReducer from './appeals/reducer'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    appealsReducer,
  })

export default createRootReducer
