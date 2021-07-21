import useSWR from "swr";
import { ResGetPoints } from "./types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const baseUrl = "http://localhost:8000";

export default function ShowPoints(): JSX.Element {
  const url = baseUrl + "/points";
  const { data, error } = useSWR(url, fetcher, {
    refreshInterval: 1000,
  });
  ResGetPoints.check(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  // eslint-disable-next-line no-console
  return <p>{JSON.stringify(data, null, 2)}</p>;
}
