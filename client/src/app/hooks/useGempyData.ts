import { useQuery } from "react-query";
import { SurfacePoint, SurfacePointRunType } from "../../types";
import { typeGuard } from "./shared";

const baseUrl = "http://localhost:8000";

const fetchSurfacePoints = async () => {
  const res = await fetch(baseUrl + "/random-surface-points");
  const data: Promise<SurfacePoint[]> = res.json();
  return data;
};

export default function useSurfacePoints() {
  const query = useQuery("surfacePoints", fetchSurfacePoints);
  const { data } = query;
  typeGuard(SurfacePointRunType, data);
  return query;
}
