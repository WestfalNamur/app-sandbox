import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SurfacePoint } from "../../../types";

// Define a service using a base URL and expected endpoints
export const gempyModelApi = createApi({
  reducerPath: "gempyModelApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getSurfacePoints: builder.query<SurfacePoint[], void>({
      query: () => "random-surface-points",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSurfacePointsQuery } = gempyModelApi;
