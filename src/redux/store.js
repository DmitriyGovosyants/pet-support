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
import { friendsApi } from './friendsApi';
import { authApi } from './authApi';
import { petApi } from './petApi';
import { authSlice } from './authSlice';
import filterReducer from './filterSlice';

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [noticesApi.reducerPath]: noticesApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [petApi.reducerPath]: petApi.reducer,
    auth: persistReducer(persistConfig, authSlice.reducer),
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    noticesApi.middleware,
    authApi.middleware,
    friendsApi.middleware,
    petApi.middleware,
  ],
});

export const persistor = persistStore(store);
