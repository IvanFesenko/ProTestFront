import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authSlice';
import questionsReducer from './questions/questionsSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
  logger,
];

const authPersistConfig = {
  key: 'authToken',
  storage,
  whitelist: ['token'],
};

const questionsPersistConfig = {
  key: 'question',
  storage,
  whitelist: ['questions', 'currentQuestion', 'typeTest'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    questions: persistReducer(questionsPersistConfig, questionsReducer),
  },
  // eslint-disable-next-line no-process-env
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
