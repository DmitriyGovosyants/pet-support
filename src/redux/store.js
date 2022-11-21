import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { noticesApi } from './noticesApi';
import { authApi } from './authApi';
import { combineReducers } from 'redux';
import authReducer from './authSlice';
import { newsApi } from './newsApi';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth'],
};

const reducers = combineReducers({
  [noticesApi.reducerPath]: noticesApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
  [newsApi.reducerPath]: newsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    noticesApi.middleware,
    newsApi.middleware,
  ],
});

export const persistor = persistStore(store);
