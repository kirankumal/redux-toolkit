const redux = require("redux");
const { userReducer, fetchUser } = require("./asyncFetch");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const thunMiddleware = require("redux-thunk").default;

const ORDER_CAKE = "ORDER_CAKE";
const ORDER_ICECREAM = "ORDER_ICECREAM";

const initialCakeState = {
  noOfCake: 10,
};

const initialIceCreamState = {
  noOfIceCream: 20,
};

function orderCake() {
  return {
    type: ORDER_CAKE,
  };
}

function orderIceCream(noOfIceCream) {
  return {
    type: ORDER_ICECREAM,
    payload: noOfIceCream,
  };
}

const cakeReducer = (state = initialCakeState, actions) => {
  switch (actions.type) {
    case ORDER_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, actions) => {
  switch (actions.type) {
    case ORDER_ICECREAM:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - actions.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

const store = createStore(rootReducer, redux.applyMiddleware(thunMiddleware));

console.log("[INITIALSTATES]", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("[UPDATEDSTATE]", store.getState())
);
// store.dispatch(orderCake());
// store.dispatch(orderIceCream(2));
// store.dispatch(orderCake());
// store.dispatch(orderIceCream(4));
// store.dispatch(orderCake());
// store.dispatch(orderIceCream(6));
store.dispatch(fetchUser());

// unsubscribe();
