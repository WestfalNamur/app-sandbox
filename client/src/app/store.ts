// The redux store keeps track of all data in our client where the source of
// truth is not outside of our client. Current view options, tokens etc. While
// i.e Dashboard data for some service data would have their source of truth in
// the respective service.

import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { logger } from "redux-logger";

import { gempyDataApi } from "../features/gempyData/gempyDataApi";

// Combine our slice reducer
const reducer = combineReducers({
  // Source of truth is client
  // i.e. counter: counterReducer,
  // Source of truth are web-apis
  [gempyDataApi.reducerPath]: gempyDataApi.reducer,
});

// Middleware
// You should be able to pass multiple middleware to a single concat call as far
// as I know.If for some reason that doesn't work, do several concat calls in a
// row.– markerikson
const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(logger, gempyDataApi.middleware);

export const store = configureStore({
  reducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
