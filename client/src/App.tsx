import { createStyles, makeStyles } from "@material-ui/core/styles";
import GempyData from "./pages/GempyData";
import ShowSurfacePoints from "./features/gempyData/ShowSurfacePoints";

const useStyles = makeStyles(() =>
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

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.indexRoot}>
      <div className={classes.indexNavBar}></div>
      <div className={classes.indexMain}>
        <div className={classes.indexSidebar}></div>
        <div className={classes.indexFeature}>
          <GempyData />
        </div>
      </div>
      <ShowSurfacePoints />
    </div>
  );
}
