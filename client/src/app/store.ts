import { logger } from "redux-logger";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { gempyModelApi } from "../features/dataView/gempyDataApi";
import { counterSlice } from "../features/counter/counterSlice";

// Combine reducer
// Api slices do not store data in a classical sense but are cached queries.
const reducer = {
  [gempyModelApi.reducerPath]: gempyModelApi.reducer,
  counter: counterSlice,
};

// Collect middleware
const middlewares = [gempyModelApi.middleware, logger];

// Configure store
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

// Export Store-Types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
