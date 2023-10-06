const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  noOfIceCream: 30,
};

const creamSlice = createSlice({
  name: "cream",
  initialState,
  reducers: {
    buyCream: (state, actions) => {
      state.noOfIceCream--;
    },
    reStockCream: (state, actions) => {
      state.noOfIceCream += actions.payload;
    },
  },
  // extraReducers: {
  //   ["cake/orderCake"]: (state) => {
  //     state.noOfIceCream--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.orderCake, (state) => {
      state.noOfIceCream--;
    });
  },
});

module.exports.creamActions = creamSlice.actions;
module.exports.creamReducer = creamSlice.reducer;
