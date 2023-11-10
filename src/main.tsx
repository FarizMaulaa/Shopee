import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Index from "./components/Elements/Product/Index";
import Testpage from "./components/Pagenation/Testpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Index />,
  },
  {
    path: "/page",
    element: <Testpage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
