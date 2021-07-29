import { useQuery } from "react-query";
import { SurfacePoint, SurfacePointRunType } from "../../types";

const baseUrl = "http://localhost:8000";

const fetchSurfacePoints = async () => {
  const url = baseUrl + "/random-surface-points";
  const res = await fetch(url);
  const data: Promise<SurfacePoint[]> = res.json();
  return data;
};

function typeGuard(runType: any, data: any) {
  if (data) {
    try {
      runType.check(data);
    } catch (err) {
      console.log("Wrong type. Is: ", data, err);
    }
  }
}

export default function useSurfacePoints() {
  const query = useQuery("surfacePoints", fetchSurfacePoints);
  typeGuard(SurfacePointRunType, query.data);
  return query;
}
