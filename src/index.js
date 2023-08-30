import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// import {App} from './V2/AppV2';
// import { App } from './V3/App';
// import { AppV2 } from './V4/AppV2';
// import { AppV2 } from './V4/AppV2';
//import {App} from './V5Rounting/App';

import { App1 } from "./V7_Authentication/App1";
// import { App } from './V6/App';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App1 />
  </Router>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <BrowserRouter>
//      <App/>
//     </BrowserRouter>
// )
