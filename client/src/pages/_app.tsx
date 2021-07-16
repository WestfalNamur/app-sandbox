import "../styles/globals.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../styles/theme";

import store from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
