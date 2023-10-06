const { default: axios } = require("axios");

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUESTED,
  };
}

function fetchUserSuccess(users) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
}

function fetchUserError(error) {
  return {
    type: FETCH_USER_ERROR,
    payload: error,
  };
}

const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/user")
      .then((user) => {
        const userName = user.data.map((item) => item.username);
        dispatch(fetchUserSuccess(userName));
      })
      .catch((error) => {
        dispatch(fetchUserError("Error on fetching"));
      });
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USER_ERROR:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

module.exports.fetchUser = fetchUser;
module.exports.userReducer = userReducer;
