import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import {Navigation} from "../components"
import Home from "./home"
import Leaderbord from "./leaderboard";
import Friends from "./friends";
import Chat from "./chat";
import Rules from "./rules";
import {AuthProvider} from "./auth"
import Login from "./login"
import Register from "./register"
import PrivateRoute from "./PrivateRoute"

const Router = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route path="/leaderboard">
                        <Leaderbord/>
                    </Route>
                    <Route path="/friends">
                        <Friends/>
                    </Route>
                    <PrivateRoute path="/chat">
                        <Chat/>
                    </PrivateRoute>
                    <Route path="/rules">
                        <Rules/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    )
}

export {
    Router
}
