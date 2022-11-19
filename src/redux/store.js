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
import { usersApi } from './usersApi';
import { authSlice } from './authSlice';

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

const reducers = combineReducers({
  [noticesApi.reducerPath]: noticesApi.reducer,
  [friendsApi.reducerPath]: friendsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    [noticesApi.reducerPath]: noticesApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [petApi.reducerPath]: petApi.reducer,
    auth: persistReducer(persistConfig, authSlice.reducer),
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
    usersApi.middleware,
  ],
});

export const persistor = persistStore(store);
