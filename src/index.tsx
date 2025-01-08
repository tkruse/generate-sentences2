import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "bulma/css/bulma.min.css";
import { Footer } from "react-bulma-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />

    <Footer>
      <a
        href="http://opensource.org/licenses/mit-license.php"
        aria-label="Copyright"
      >
        <FontAwesomeIcon icon={faCopyright} />
      </a>
      <a
        href="https://github.com/tkruse/generate-sentences2"
        aria-label="Github"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </Footer>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
