/**
 * @file user reducers
 * @author Yuan Yanjun
 */

import {combineReducers} from 'redux';

import * as CONSTANT from '../../actions/constant';
import phone from './phone';
import email from './email';

function name(state = '', action) {
    switch (action.type) {
        case CONSTANT.SET_USER_NAME:
            return action.name;
        default:
            return state;
    }
}

function friends(state = [], action) {
    switch (action.type) {
        case CONSTANT.ADD_FRIEND:
            return [
                ...state,
                action.friend
            ];
        default:
            return state;
    }
}

export default combineReducers({
    name,
    friends,
    phone,
    email
});
