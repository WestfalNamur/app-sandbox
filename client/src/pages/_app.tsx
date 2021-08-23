// Core of our React-Redux-Next App.
// We pass providers from here down our component tree.

import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import { store } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
