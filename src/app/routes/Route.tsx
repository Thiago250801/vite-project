import React from "react";
import {
    BrowserRouter,
    Routes as Switch,
    Route, Navigate,
} from "react-router-dom";
import {Dashboard} from "../pages";
import {NotFound} from "../pages/notFound/NotFound";
import {Navbar} from "../shared/components/navbar/Navbar";
import {Home} from "../pages/home/home";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/home" element={<Home />}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path= "*"  element={<NotFound/>} />
            </Switch>
        </BrowserRouter>
    )
}