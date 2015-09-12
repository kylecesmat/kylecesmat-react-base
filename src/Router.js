import React             from "react/addons"; // eslint-disable-line
import {Route, Redirect} from "react-router";

import App      from "./ui/layouts/app";
import HomePage from "./ui/pages/home";

export default (
    <Route name="app" path="/" handler={App}>
        <Route name="homePage" path="/home" handler={HomePage} />
        <Redirect from="/" to="homePage" />
    </Route>
);
