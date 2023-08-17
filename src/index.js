import React from 'react';
import ReactDOM from 'react-dom/client';
// import {App} from './V2/AppV2';
// import { App } from './V3/App';
// import { AppV2 } from './V4/AppV2';
// import { AppV2 } from './V4/AppV2';

import {App} from './V5Rounting/App';
import { BrowserRouter } from "react-router-dom";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// ReactDOM.createRoot(document.getElementById("root")).render(
// <AppV2 />)

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
     <App/>
    </BrowserRouter>
)
