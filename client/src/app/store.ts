// The redux store keeps track of all data in our client where the source of
// truth is not outside of our client. Current view options, tokens etc. While
// i.e Dashboard data for some service data would have their source of truth in
// the respective service.

import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { logger } from "redux-logger";

import counterReducer from "../features/counter/counterSlice";
import { gempyModelTabularData } from "../features/gempyModelTable/gempyTabularDataApi";

// Combine our slice reducer
const reducer = combineReducers({
  // Source of truth is client
  counter: counterReducer,
  // Source of truth is web-api
  [gempyModelTabularData.reducerPath]: gempyModelTabularData.reducer,
});

// Middleware
// You should be able to pass multiple middleware to a single concat call as far
// as I know.If for some reason that doesn't work, do several concat calls in a
// row.– markerikson
const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(logger, gempyModelTabularData.middleware);

// Create store and the makeStore function. This functions is used during
// testing.
export const makeStore = (): any => {
  return configureStore({
    reducer,
    middleware,
  });
};
const store = makeStore();

// Types of our store, dispatches, thunks
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

// Export the store object
export default store;
