import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SurfPointTable from "../features/gempyData/SurfPointTable";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gempyDataViewRoot: {
      width: "100%",
      height: "100%",
      flexGrow: 1,
    },
  })
);

export default function GempyData() {
  const classes = useStyles();
  return (
    <Grid container className={classes.gempyDataViewRoot}>
      <Grid container item xs={6} spacing={0}>
        <SurfPointTable />
      </Grid>
      <Grid container item xs={6} spacing={0}>
        <SurfPointTable />
      </Grid>
    </Grid>
  );
}
