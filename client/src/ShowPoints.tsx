import { useQuery } from "react-query";
import { SurfacePointRunType, SurfacePoint } from "./types";

const baseUrl = "http://localhost:8000";

const fetcherSurfacePoints = async () => {
  const res = await fetch(baseUrl + "/random-surface-points");
  const data: Promise<SurfacePoint[]> = res.json();
  return data;
};

export default function ShowPoints(): JSX.Element {
  const { data, status } = useQuery("surfacePoints", fetcherSurfacePoints);
  if (status === "error") return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!SurfacePointRunType.guard(data)) return <div>Wrong shape</div>;
  return (
    <>
      {data.map((sp) => (
        <p>{sp.idx}</p>
      ))}
    </>
  );
}
