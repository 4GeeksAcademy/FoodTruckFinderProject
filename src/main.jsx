import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RootLayout } from "./layouts/RootLayout.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
{path: "/", element: <RootLayout />,
children:[
  {
    path:"/",element:<App/>,},{path: "/about",element:<About/>,},]},
{
  path:"/cart",element:<Cart/>,loader:loader}])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
