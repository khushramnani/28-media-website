// import { Outlet } from "react-router-dom";

import Layout from "./Layout"; // adjust the path as needed
import Home from "./Components/Home";
import Footer from "./Components/Footer";

export const routes = [
  {
    path: "/",
    element: <Layout />, // Layout contains <Outlet />
    children: [
      { path: "/", element: <Home /> },
    
    ],
  },
];