import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import gempyDataSlice from "./GempyDataSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      gempyData: gempyDataSlice,
    },
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
