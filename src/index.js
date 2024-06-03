import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StrictMode } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
    <StrictMode>
      <GoogleOAuthProvider clientId="6648066193-c5uv59df5gherttr7ricb743o66dktba.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </StrictMode>
);
