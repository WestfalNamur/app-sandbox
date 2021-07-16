import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SurfPointTable from "../tables/SurfPointTable";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divGeoDataView: {
      width: "100%",
      height: "100%",
    },
  })
);

export default function GeoDataView() {
  const classes = useStyles();
  return (
    <div className={classes.divGeoDataView}>
      <Paper>
        <SurfPointTable />
      </Paper>
    </div>
  );
}
