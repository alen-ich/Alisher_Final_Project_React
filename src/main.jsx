import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./BLL/store.js";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={process.env.NODE_ENV === "production" ? "/Alisher_Final_Project_React/" : "/"}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
