import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import appealsReducer from './appeals/reducer'
import uiReducer from './UI/reducer'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    appealsReducer,
    uiReducer,
  })

export default createRootReducer
