import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SurfPointTable from "./SurfPointTable";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    geoDataViewRoot: {
      width: "100%",
      height: "100%",
      flexGrow: 1,
    },
  })
);

export default function GeoDataView() {
  const classes = useStyles();
  return (
    <Grid container className={classes.geoDataViewRoot}>
      <Grid container item xs={6} spacing={0}>
        <SurfPointTable />
      </Grid>
      <Grid container item xs={6} spacing={0}>
        <SurfPointTable />
      </Grid>
    </Grid>
  );
}
