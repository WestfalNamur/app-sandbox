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

// export function useGetSurfacePoints() {
//   const query = useGetSurfacePointsQuery();
//   const { data } = query;
//   try {
//     SurfacePointRunType.check(data);
//   } catch (e) {
//     console.log(
//       "Validation Error in http://localhost:8000/random-surface-points data"
//     );
//   }
//   return query;
// }

export function useGetSurfacePoints() {
  const query = useGetSurfacePointsQuery();
  const { data } = query;

  // Decode data and typeguard
  if (data) {
    const sPs: SurfacePoint[] = data.map((p) => {
      // Cast into decoded SurfacePoint
      const sp: SurfacePoint = {
        idx: p.idx,
        x: p.x,
        y: p.y,
        z: p.z,
        x_uc_dist: p.x_uc_dist,
        y_uc_dist: p.y_uc_dist,
        z_uc_dist: p.z_uc_dist,
        x_uc: p.x_uc,
        y_uc: p.y_uc,
        z_uc: p.z_uc,
        formation: p.formation,
        smooth: p.smooth,
      };
      // Check for undefined
      const noNull = Object.values(sp).every((xi) => typeof xi !== "undefined");
      if (!noNull) {
        console.log("Some values are missing on SurfacePoint");
      }
      return sp;
    });
    query.data = sPs;
  }
  return query;
}
