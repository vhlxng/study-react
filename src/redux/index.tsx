import { combineReducers, createStore, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
// import { all } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'


import authReducer from './auth/reducer'
// import authSagas from './auth/sagas'

export const rootReducer = combineReducers({
  auth: authReducer,
})

// export const rootSaga = function* () {
//   yield all([...authSagas, ...scheduleSagas, ...chatSagas])
// }

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
