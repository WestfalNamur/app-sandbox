import useSWR from "swr";
import { GetPointsRes, ResGetPoints } from "../../types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const baseUrl = "http://localhost:8000";

export function getGreetings(): GetPointsRes {
  const url = baseUrl + "/greetings";
  const { data, error, mutate } = useSWR(url, fetcher, {
    refreshInterval: 1000,
  });
  ResGetPoints.check(data);
  return { data, error, mutate };
}
