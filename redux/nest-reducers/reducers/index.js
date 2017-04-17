/**
 * @file 主reducer
 * @date 2017-04-17
 * @author Yuan Yanjun
 */
import {combineReducers} from 'redux';

import * as CONSTANT from '../actions/constant';

import user from './user';
import todo from './todo';

function time(state = 0, action) {
    switch (action.type) {
        case CONSTANT.SET_TIME:
            return action.time;
        default:
            return state;
    }
}

export default combineReducers({
    time,
    user,
    todo
});
