import type { NextPage } from "next";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    indexRoot: {
      flexGrow: 1,
    },
    indexNavBar: {
      backgroundColor: "#008000",
      height: 50,
      width: "100%",
    },
    indexMain: {
      height: 450,
      width: "100%",
      display: "flex",
    },
    indexSidebar: {
      backgroundColor: "#FFFF00",
      height: "100%",
      width: 100,
    },
    indexFeature: {
      height: "100%",
      width: "100%",
    },
  })
);

import GeoDataView from "../features/dataView/GeoDataView";

const IndexPage: NextPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.indexRoot}>
      <div className={classes.indexNavBar}></div>
      <div className={classes.indexMain}>
        <div className={classes.indexSidebar}></div>
        <div className={classes.indexFeature}>
          <GeoDataView />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
