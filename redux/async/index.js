var redux = require('redux');

var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;

var m1 = store => next => action => {
  console.log(1);
  next(action);
  console.log(2);
};

var m2 = store => next => action => {
  return 'm2';
};

var m3 = store => next => action => {
  console.log(4);
  next(action);
  console.log(5);
};

function reduce(state, action) {
  return {};
}

store = applyMiddleware(m1, m2, m3)(createStore)(reduce);

var a = store.dispatch({
  type: 'test',
  data: {}
});

console.log('a ===> ', a);
