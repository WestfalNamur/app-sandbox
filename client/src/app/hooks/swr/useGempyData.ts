import useSWR from "swr";
import { SurfacePoint, SurfacePointRunType } from "../../../types";
import { typeGuard } from "./shared";

const baseUrl = "http://localhost:8000";

const fetchSurfacePoints = async () => {
  const res = await fetch(baseUrl + "/random-surface-points");
  const data: Promise<SurfacePoint[]> = res.json();
  return data;
};

export function useSurfacePoints() {
  const { data, error, mutate } = useSWR("/api/user", fetchSurfacePoints, {
    refreshInterval: 5000,
  });
  if (data) {
    typeGuard(SurfacePointRunType, data);
  }
  return { data, error, mutate };
}
