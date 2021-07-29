import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GempyDataState, SurfacePoint } from "../../types";
import { AppState } from "../../app/store";

const initialState: GempyDataState = {
  surfacePoints: [],
};

// reducer logic  // using immer.js under the hood. As recommened practice
// we will follow its patterns here.
const greetingReducer = createSlice({
  name: "gempyData",
  initialState,
  reducers: {
    setSurfacePoints(state, action: PayloadAction<SurfacePoint[]>) {
      state.surfacePoints = action.payload;
    },
  },
});

// destructure and export actions.
export const { setSurfacePoints } = greetingReducer.actions;

// export selector
export const selectGreetings = (state: AppState) => state.gempyData;

// export slice reducer.
export default greetingReducer.reducer;
