import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SurfacePoint } from "../../../types";

export const gempyDataApi = createApi({
  reducerPath: "gempyModelTabularData",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getSurfacePoints: builder.query<SurfacePoint[], void>({
      query: () => "random-surface-points",
    }),
  }),
});

export const { useGetSurfacePointsQuery } = gempyDataApi;
