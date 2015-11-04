import Immutable from 'immutable';
import { combineReducers } from 'redux';
import { ADD_ITEM, REMOVE_ITEM } from './demo-actions';

function demoItems(state = new Immutable.List(), action) {
    switch (action.type) {
        case ADD_ITEM:
            return state.push(action.item);

        case REMOVE_ITEM:
            return state.filterNot(x => x === action.item);

        default:
            return state;
    }
}

export default combineReducers({
    demoItems
});
