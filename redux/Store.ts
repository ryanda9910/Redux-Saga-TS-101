import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import rootSaga from './Saga'

const sagaMiddleware = createSagaMiddleware()
import rootReducer from './reducer/index'
export default function configureStore(){
  const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  return store
}