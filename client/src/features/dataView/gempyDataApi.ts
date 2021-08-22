import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SurfacePoint, SurfacePointRunType } from "../../../types";

export const gempyModelApi = createApi({
  reducerPath: "gempyModelApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getSurfacePoints: builder.query<SurfacePoint[], void>({
      query: () => "random-surface-points",
    }),
  }),
});

export const { useGetSurfacePointsQuery } = gempyModelApi;

export function useGetSurfacePoints() {
  const query = useGetSurfacePointsQuery();
  const { data } = query;

  try {
    SurfacePointRunType.check(data);
  } catch (err) {
    console.log("Validation error in: /random-surface-points", data, err);
  }

  return query;
}
