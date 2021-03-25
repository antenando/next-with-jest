import App, { Container } from "next/app";
import React from "react";
import { Provider } from "overmind-react";
import { createOvermind } from "overmind";
import { config } from "../overmind";

const overmind = createOvermind(config, {
  devtools: true, // defaults to 'localhost:3031'
});


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider value={overmind}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
export default MyApp;
