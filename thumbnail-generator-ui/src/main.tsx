import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.render(
  <Auth0Provider
    domain="dev-pg5bsczdumvjfub3.us.auth0.com"
    clientId="heS0q85rMTiLnEScAsI1dAhnSFaJXCkq"
    authorizationParams={{
    redirect_uri: window.location.origin}}>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
); 
