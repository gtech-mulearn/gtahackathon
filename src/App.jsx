import logo from "./logo.svg";
import React from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home/Home";

import GTACodestorm from "./HackathonPages/GTACodestorm/GTACodestorm";
import GTASandshore from "./HackathonPages/GTASandshore/GTASandshore";
import Leaderboard from "./Components/Leaderboard/Leaderboard";

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
            element: (
                <Leaderboard
                    backUrl="/sandshores"
                    registerUrl="https://gta-sandshores.devfolio.co/"
                    leaderboardUrl="https://devfolio.vez.social/rank"
                />
            ),
        },
        {
            path: "/codestormleaderboard",
            element: (
                <Leaderboard
                    backUrl="/codestorm"
                    registerUrl="https://gta-sandshores.devfolio.co/"
                    leaderboardUrl="https://devfolio.vez.social/rank"
                />
            ),
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;