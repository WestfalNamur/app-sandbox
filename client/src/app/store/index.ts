import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { logger } from "redux-logger";

import gempyDataReducer from "./gempyDataReducer";

export function makeStore() {
  return configureStore({
    reducer: {
      gempyData: gempyDataReducer,
    },
    middleware: [logger],
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
