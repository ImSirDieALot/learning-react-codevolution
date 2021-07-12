const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
console.log('From index.js');

// Action
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// Action Creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: 'Ice cream'
  }
}

// (previousState, action) => newState
// determine application state first
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// };

const initialCakeState = {
  numOfCakes: 10
};

const initialIceCreamState = {
  numOfIceCreams: 20
};

//reducers

// const reducer = (state = initialState, action) => {
//   switch(action.type) {
//     case BUY_CAKE: return {
//       ...state,
//       numOfCakes: state.numOfCakes - 1
//     }
//     case BUY_ICECREAM: return {
//       ...state,
//       numOfIceCreams: state.numOfIceCreams - 1
//     }

//     default: return state
//   }
// };

const cakeReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }

    default: return state
  }
};

const iceCreamReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }

    default: return state
  }
};

// responsibility 1 - hold the state
// combine reducers into single reducer - line 4
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

// responsibility 2 - access to state via getState()
console.log('initial state', store.getState());
// responsibility 4 - registers listeners via `subscribe(listener)`
const unsubscribe = store.subscribe(() => {});
// responsibility 3 - allows state to be updated via dispatch(action)
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
// responsibility 5 - handles unregistering of listeners via the function returned by `subscribe(listener)`
unsubscribe();