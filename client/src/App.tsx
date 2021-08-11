import { createStyles, makeStyles } from "@material-ui/core/styles";
import Home from "./pages/Home";

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
      <Home />
    </div>
  );
}
