import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import { Navigation } from "../components"
import Home from "./home"
import Leaderbord from "./leaderboard";
import Friends from "./friends";

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/leaderboard">
                    <Leaderbord />
                </Route>
                <Route path="/friends">
                    <Friends />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
