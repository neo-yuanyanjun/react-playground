/**
 * @file todo reducers
 * @author Yuan Yanjun
 */

import {combineReducers} from 'redux';
import * as CONSTANT from '../../actions/constant';

function filter(state = '', action) {
    switch (action.type) {
        case CONSTANT.SET_TODO_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function list(state = [], action) {
    switch (action.type) {
        case CONSTANT.ADD_TODO:
            return [
                ...state,
                action.todo
            ];
        default:
            return state;
    }
}

export default combineReducers({
    filter,
    list
});
