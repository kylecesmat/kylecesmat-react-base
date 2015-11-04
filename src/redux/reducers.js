'use strict';
import { combineReducers } from 'redux';
import demoItems from './demo/demo-reducers';

const app = combineReducers({
    demoItems
});

export default app;
