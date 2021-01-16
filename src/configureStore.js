import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducers/rootReducer'
 
 
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store);

export default { store, persistor };