import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const userStyles = makeStyles({
  btnStyle: {
    fontStyle: "oblique",
  },
});

export default function SurfPointTable() {
  const classes = userStyles();
  return (
    <div>
      <Button color="primary">
        <Typography className={classes.btnStyle}>
          Hello, Button and Typography
        </Typography>
      </Button>
    </div>
  );
}
