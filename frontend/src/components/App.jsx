import React from "react";
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";

import HomePage from "./HomePage"
import ConfidentialityPolicy from "./ConfidentialityPolicy"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/privacy",
    element: <ConfidentialityPolicy />,
  },
]);


export default function App() { 
   return (<RouterProvider router={router} />);
}
