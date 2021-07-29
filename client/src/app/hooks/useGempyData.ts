import { useQuery } from "react-query";
import { SurfacePoint, SurfacePointRunType } from "../../types";
import { typeGuard } from "./shared";
import { setSurfacePoints } from "../../app/store/gempyDataReducer";
import { useAppDispatch } from "../../app/hooks";

const baseUrl = "http://localhost:8000";

const fetchSurfacePoints = async () => {
  const res = await fetch(baseUrl + "/random-surface-points");
  const data: Promise<SurfacePoint[]> = res.json();
  return data;
};

export default function useSurfacePoints() {
  // Query, TypeGuard, and Redux
  const dispatch = useAppDispatch();
  const query = useQuery("surfacePoints", fetchSurfacePoints);
  const { data } = query;
  if (typeGuard(SurfacePointRunType, data)) {
    data && dispatch(setSurfacePoints(data));
  }
  return query;
}
