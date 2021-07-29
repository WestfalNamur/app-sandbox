import { useQuery } from "react-query";
import { SurfacePoint } from "../../types";

const baseUrl = "http://localhost:8000";

const fetchSurfacePoints = async () => {
  const url = baseUrl + "/random-surface-points";
  const res = await fetch(url);
  const data: Promise<SurfacePoint[]> = res.json();
  return data;
};

export default function useSurfacePoints() {
  return useQuery("surfacePoints", fetchSurfacePoints);
}
