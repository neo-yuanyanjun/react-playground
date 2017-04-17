/**
 * @file 嵌套的reducers测试
 * @date 2017-04-17
 * @author Yuan Yanjun
 */
import {createStore} from 'redux';

import reducers from './reducers';

import {setTime, setUserName, addFriend, setUserPhone, addUserPhone, setUserEmail, addUserEmail, setTodoFilter, addTodo} from './actions';

const INIT_STATE = {
    time: 0,
    user: {
        name: '',
        friends: [],
        phone: {
            main: '',
            backups: []
        },
        email: {
            main: '',
            backups: []
        }
    },
    todo: {
        filter: '',
        list: []
    }
};

let store = createStore(reducers, INIT_STATE);

console.log(store.getState());

let unsubscribe = store.subscribe(
    // () => console.log(JSON.stringify(store.getState()))
    () => console.log(store.getState())
);

store.dispatch(setTime(Date.now()));

store.dispatch(setUserName('袁燕军'));

store.dispatch(addFriend('谷守闯'));
store.dispatch(addFriend('后宇鑫'));
store.dispatch(addFriend('梁锦平'));

store.dispatch(setUserPhone(18513140057));
store.dispatch(addUserPhone(28513140057));
store.dispatch(addUserPhone(38513140057));
store.dispatch(addUserPhone(48513140057));

store.dispatch(setUserEmail('yuanyanjun@baidu.com'));
store.dispatch(addUserEmail('yuanyanjun@qq.com'));
store.dispatch(addUserEmail('yuanyanjun@yahoo.com'));
store.dispatch(addUserEmail('yuanyanjun@sohu.com'));

store.dispatch(setTodoFilter('done'));
store.dispatch(addTodo('TODO 1'));
store.dispatch(addTodo('TODO 2'));
store.dispatch(addTodo('TODO 3'));

unsubscribe();
