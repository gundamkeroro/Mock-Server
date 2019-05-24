import axios from "plugins/axios";

// action-types
const USER_LIST = "USER_LIST";

// state
const initialState = {
  lists: [],
};

// action
export const getUserList = () => dispatch => new Promise((resolve, reject) => {
  axios({
    dispatch,
    method: "get",
    url: "api-self/v1/user",
    success(res) {
      dispatch({ type: USER_LIST, lists: res.data });
      resolve(res);
    },
    fail(err) {
      reject(err);
    },
  });
});

// reducer
const user = (state = initialState, action) => {
  switch (action.type) {
  case USER_LIST:
    return {
      ...state,
      lists: action.lists,
    };
  default:
    return state;
  }
};

export default user;

// selector
export const getUsers = state => state.user.lists;