import logo from './logo.svg';
import React from "react";
import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home/Home";

import GTACodestorm from './HackathonPages/GTACodestorm/GTACodestorm'
import GTASandshore from "./HackathonPages/GTASandshore/GTASandshore";
import GTASandshoreLeaderboard from "./HackathonPages/GTASandshore/Components/Leaderboard/Leaderboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/codestorm",
      element: <GTACodestorm />,
    },
    {
      path: "/sandshores",
      element: <GTASandshore />,
    },
    {
      path: "/sandshoresleaderboard",
      element: <GTASandshoreLeaderboard />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
