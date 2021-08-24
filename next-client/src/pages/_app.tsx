// App component to initialize pages. Providers need to go here.

import "../styles/globals.css";

import { StrictMode } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </StrictMode>
  );
}

export default MyApp;
