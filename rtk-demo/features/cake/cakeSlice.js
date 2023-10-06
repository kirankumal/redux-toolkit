const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  noOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    orderCake: (state, actions) => {
      state.noOfCake--;
    },
    reStockCake: (state, actions) => {
      state.noOfCake += 1;
    },
  },
});

module.exports.cakeReducer = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
