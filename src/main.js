'use strict';
import app from './redux/reducers';
import React from 'react';
import ReactDOM, { unstable_batchedUpdates } from 'react-dom';
import routes from './routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createHistory } from 'history/lib';

// debugging
window.React = React; /* To enable Chrome react plugin */

let store = createStore(app);
let history = createHistory();

let createAppElement = (Component, props) => {
    return (
        <Component {...props} />
    );
};

ReactDOM.render(
    <Provider store={store}>
        <Router
            createElement = {createAppElement}
            history       = {history} >
            {routes}
        </Router>
    </Provider>
    , document.getElementById('app')
);
