import { createStyles, makeStyles } from "@material-ui/core/styles";
import NavBar from "./features/NavBar";

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

  return (
    <div className={classes.indexRoot}>
      <NavBar />
      <div className={classes.indexMain}>
        <h1>Content!</h1>
      </div>
    </div>
  );
}
