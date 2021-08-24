import useSWR from "swr";
import { runTypeCheck, SurfacePointRunType } from "../../types";

const url = "http://localhost:8000/random-surface-points";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SurfacePointTable() {
  const { data, error } = useSWR(url, fetcher);
  runTypeCheck(SurfacePointRunType, data);

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Hello, SurfacePoints!</h1>
    </>
  );
}
