import { appReducer } from './appReducer';
import { formReducer } from './formReducer';
import { combineReducers } from "redux";
import { 
  persistStore, 
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  app:appReducer,
  form:formReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
