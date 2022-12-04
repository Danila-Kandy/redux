import { applyMiddleware, combineReducers, createStore } from 'redux'
import albumsReducer from './albums/albumsReducer'
import usersReducer from './users/usersReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    users: usersReducer,
    albums: albumsReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
