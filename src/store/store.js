import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['books']
}

// const middlewares = [thunk];

// if (process.env.NODE_ENV !== "production") {
//   const { logger } = require("redux-logger");
//   middlewares.push(logger);
// }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = createStore(persistedReducer, applyMiddleware(thunk, logger));

export const persistor = persistStore(configureStore);