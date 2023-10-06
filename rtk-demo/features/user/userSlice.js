const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const fetchUser = createAsyncThunk("user/fetchUser", async (args, thunkApi) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/uses"
    );
    return response.data.map((item) => item.username);
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    });
  },
});

module.exports.fetchUser = fetchUser;
module.exports.userReducer = userSlice.reducer;
