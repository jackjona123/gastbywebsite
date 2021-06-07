import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./assests/font-awesome/css/all.css";

const engine = new Styletron();

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById("root")
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceworker.js").then(registration => {
      console.log("SW Registered!");
      console.log(registration);
  }).catch(error => {
      console.log("SW Registration Has Failed...");
      console.log(error);
  });
};

if (window.console) {
  var o = navigator.userAgent.toLowerCase();
  if (o.indexOf("chrome") > -1 || o.indexOf("firefox") > -1) {
      window.console.log.apply(console, ["%c %c Site Built By Jack Jona %c %c  https://jackjona.com  %c ", "background: #f12626; border: 1px solid #f12626; padding:5px 0; margin:3px 0 10px 0;", "background: #ffffff; border: 1px solid #f12626; color: #f12626; padding:5px 0; margin:3px 0 10px 0;", "background: #f12626; border: 1px solid #f12626; padding:5px 0; margin:3px 0 10px 0;", "background: #ffffff; border: 1px solid #f12626; color: #f12626; padding:5px 0; margin:3px 0 10px 0;", "background: #f12626; border: 1px solid #f12626; padding:5px 0; margin:3px 0 10px 0;"])
  } else
      window.console.log("Site Built By Jack Jona - https://jackjona.com")
}