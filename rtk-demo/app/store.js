const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const { userReducer } = require("../features/user/userSlice");

const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice").cakeReducer;
const creamReducer = require("../features/icecream/icecreamSlice").creamReducer;
const logger = require("redux-logger").createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    cream: creamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
