/**
 * @file action creators
 * @date 2017-04-17
 * @author Yuan Yanjun
 */

import * as CONSTANT from './constant';

export function setTime(time) {
    return {
        type: CONSTANT.SET_TIME,
        time
    };
}

export function setUserName(name) {
    return {
        type: CONSTANT.SET_USER_NAME,
        name
    };
}

export function addFriend(friend) {
    return {
        type: CONSTANT.ADD_FRIEND,
        friend
    };
}

export function setUserPhone(phone) {
    return {
        type: CONSTANT.SET_USER_PHONE,
        phone
    };
}

export function addUserPhone(phone) {
    return {
        type: CONSTANT.ADD_USER_PHONE,
        phone
    };
}

export function setUserEmail(email) {
    return {
        type: CONSTANT.SET_USER_EMAIL,
        email
    };
}

export function addUserEmail(email) {
    return {
        type: CONSTANT.ADD_USER_EMAIL,
        email
    };
}

export function setTodoFilter(filter) {
    return {
        type: CONSTANT.SET_TODO_FILTER,
        filter
    };
}

export function addTodo(todo) {
    return {
        type: CONSTANT.ADD_TODO,
        todo
    };
}
