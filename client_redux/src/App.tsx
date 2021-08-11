import { createStyles, makeStyles } from "@material-ui/core/styles";
import ClippedDrawer from "./features/ClippedDrawer";
import { useGetSurfacePointsQuery } from "./app/store/services/surfacePoints";

const useStyles = makeStyles(() =>
  createStyles({
    indexRoot: {
      flexGrow: 1,
    },
    indexMain: {
      height: 450,
      width: "100%",
      display: "flex",
    },
  })
);

export default function App() {
  const classes = useStyles();
  const { data, error, isLoading } = useGetSurfacePointsQuery();
  if (error) {
    return <div>Error while loading GetSurfacePointsQuery</div>;
  }
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (data) {
    console.log(data);
  }

  return (
    <div className={classes.indexRoot}>
      <ClippedDrawer />
    </div>
  );
}
