import { configureStore } from '@reduxjs/toolkit';
import { contactReduser } from './contactsSlice';
import { filterredReduser } from './filterSlice';
import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contact',
  storage,
}

const persistedReducer = persistReducer(persistConfig, contactReduser);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterredReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);