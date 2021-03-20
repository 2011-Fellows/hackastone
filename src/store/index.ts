import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createInjectorsEnhancer } from 'redux-injectors'
import createSagaMiddleware from 'redux-saga'

import users from './users'
//import articles from "./articles";

let reducers = combineReducers({
  users
})

// const reduxSagaMonitorOptions = {}
//   const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
//   const { run: runSaga } = sagaMiddleware

const middleware: any = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)




const store = createStore(reducers, middleware );
export default store;
