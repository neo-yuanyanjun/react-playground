var redux = require('redux');
var reduxThunk = require('redux-thunk').default;

var createStore = redux.createStore;
svar applyMiddleware = redux.applyMiddleware;
var compose = redux.compose;

var m1 = store => next => action => {
  console.log('m1 - 1');
  console.log('m1 - 2', next(action));
  console.log('m1 - 3');
};

var m2 = store => next => action => {
  console.log('m2 - 1');
  next(action)
  console.log('m2 - 2');
  return 'm2 - 3';
};

var m3 = store => next => action => {
  console.log('m3 - 1');
  console.log('m3 --- ', next(action));
  console.log('m3 - 2');
};

var m4 = store => next => action => {
  console.log('m4 start');
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(true);
      console.log('m4 end');
    }, 1000 * 20);
  });
};

function reduce(state, action) {
  console.log('reduce')
  return {};
}

var store = applyMiddleware(reduxThunk, m1, m2, m3)(createStore)(reduce);
// var store = createStore(reduce, {}, compose(applyMiddleware(reduxThunk, m1, m2, m3)));

var a = store.dispatch({
  type: 'test action',
  data: {}
});

console.log('a ===> ', a);
