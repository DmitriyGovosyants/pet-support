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
import { combineReducers } from 'redux';
import authReducer from './authSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth'],
};

const reducers = combineReducers({
  [noticesApi.reducerPath]: noticesApi.reducer,
  [friendsApi.reducerPath]: friendsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [petApi.reducerPath]: petApi.reducer,
  auth: authReducer,
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
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);
