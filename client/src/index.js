import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ItemProvider } from "./components/ItemContext";

ReactDOM.render(
  <Auth0Provider
    domain="dev-3v3jf16o.us.auth0.com"
    clientId="DwbBaIe7YnyJStRuq7XcsDx6pfLUu1fz"
    redirectUri={window.location.origin}>
    <ItemProvider>
      <App />
    </ItemProvider>
    </Auth0Provider>,
  document.getElementById('root')
);
