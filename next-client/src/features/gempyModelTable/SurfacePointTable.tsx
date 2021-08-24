import { useGetSurfacePointsQuery } from "./gempyTabularDataApi";

export default function SurfacePointTable() {
  const { data, error, isLoading } = useGetSurfacePointsQuery();

  if (error) return <p>Error while loading data.</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1>Hello, SurfacePoints!</h1>
    </>
  );
}
