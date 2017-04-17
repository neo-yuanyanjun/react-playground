/**
 * @file email reducers
 * @author Yuan Yanjun
 */

import {combineReducers} from 'redux';

import * as CONSTANT from '../../../actions/constant';

function main(state = '', action) {
    switch (action.type) {
        case CONSTANT.SET_USER_EMAIL:
            return action.email;
        default:
            return '';
    }
}

function backups(state = [], action) {
    switch (action.type) {
        case CONSTANT.ADD_USER_EMAIL:
            // TODO: bugs
            console.log(3333333333333333333333, action);
            return [
                ...state,
                action.email
            ];
        default:
            return state;
    }
}

export default combineReducers({
    main,
    backups
});
