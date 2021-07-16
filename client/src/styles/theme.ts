import { createTheme } from "@material-ui/core/styles";
import { red, blueGrey, brown } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[400],
    },
    secondary: {
      main: brown[400],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
