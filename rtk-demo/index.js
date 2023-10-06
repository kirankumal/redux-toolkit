const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { creamActions } = require("./features/icecream/icecreamSlice");
const { fetchUser } = require("./features/user/userSlice");

const unsubscribe = store.subscribe(
  () => {}
  //   console.log("[INITIALSTATE]", store.getState())
);

// store.dispatch(cakeActions.orderCake());
// store.dispatch(cakeActions.reStockCake());
// store.dispatch(creamActions.buyCream());
// store.dispatch(creamActions.reStockCream(5));
store.dispatch(fetchUser());

// unsubscribe();
