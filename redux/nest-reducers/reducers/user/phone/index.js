/**
 * @file phone reducers
 * @author Yuan Yanjun
 */

import {combineReducers} from 'redux';

import * as CONSTANT from '../../../actions/constant';

function main(state = '', action) {
    switch (action.type) {
        case CONSTANT.SET_USER_PHONE:
            return action.phone;
        default:
            return state;
    }
}

function backups(state = [], action) {
    switch (action.type) {
        case CONSTANT.ADD_USER_PHONE:
            // TODO: 这里有bug
            console.log(1111111111, action);
            return [
                ...state,
                action.phone
            ];
        default:
            return state;
    }
}

export default combineReducers({
    main,
    backups
});
