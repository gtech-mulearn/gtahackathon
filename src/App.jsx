import logo from './logo.svg';
import React from "react";
import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home/Home";

import GTACodestorm from './HackathonPages/GTACodestorm/GTACodestorm'
import GTASandshore from './HackathonPages/GTASandshore/GTASandshore'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sandshores",
      element: <GTASandshore />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
