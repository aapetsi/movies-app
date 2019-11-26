import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import movieReducer from '../reducers/movieReducer'
import filtersReducer from '../reducers/filtersReducer'
import registerReducer from '../reducers/registerReducer'

const rootReducer = combineReducers({
  movies: movieReducer,
  filters: filtersReducer,
  userRegister: registerReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reduxStore = () => {
  // Store creation
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}

export default reduxStore
