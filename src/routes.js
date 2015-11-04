'use strict';
import React             from "react"; // eslint-disable-line
import {Route, Redirect} from "react-router";

import App      from "./ui/layouts/app";
import HomePage from "./ui/pages/home";

let Routes = (
    <Route component={App}>
        <Route path="/" component={HomePage} />
    </Route>
);

export default Routes;
