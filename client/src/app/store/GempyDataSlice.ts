import { SurfacePoint, GempyDataState } from "./../../types/gempy";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from ".";

const initialState: GempyDataState = {
  surfacePoints: [],
};

// slice
const gempyDataSlice = createSlice({
  name: "gempyData",
  initialState,
  reducers: {
    setSurfacePoints(state, action: PayloadAction<SurfacePoint[]>) {
      state.surfacePoints = action.payload;
    },

    addSurfacePoint(state, action: PayloadAction<SurfacePoint>) {
      state.surfacePoints.push(action.payload);
    },
  },
});

// destructure and export actions.
export const { setSurfacePoints, addSurfacePoint } = gempyDataSlice.actions;

// export selector
export const selectGempyData = (state: AppState) => state.gempyData;

// export slice reducer.
export default gempyDataSlice.reducer;
