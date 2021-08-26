// App component to initialize pages. Providers need to go here.

import "../styles/globals.css";

import React, { ReactElement, StrictMode } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "../app/store";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <StrictMode>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </StrictMode>
  );
};

export default MyApp;
