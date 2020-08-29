import { createContext, useState } from "react";
import Head from "next/head";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { FAHRENHEIT } from "../utils/constants";

import { theme } from "../theme";
import "../theme/globals.css";

export const UnitContext = createContext(FAHRENHEIT);

const SubComponent = ({ children }) => {
  const [unit, setUnit] = useState(FAHRENHEIT);

  return (
    <UnitContext.Provider value={{ unit, updateUnit: setUnit }}>
      {children}
    </UnitContext.Provider>
  );
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Alata&family=Roboto&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
        </Head>

        <ThemeProvider theme={theme}>
          <SubComponent>
            <Component {...pageProps} />
          </SubComponent>
        </ThemeProvider>
      </>
    );
  }
}
