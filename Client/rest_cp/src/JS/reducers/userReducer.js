import {
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_LOAD,
  GET_ALL_USERS_SUCCESS,
  GET_USER_SUCCESS,
} from "../constants/action-types";

const initialState = {
  users: [],
  isLoad: false,
  isError: false,
  user: {},
};
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS_FAIL:
      return { ...state, isLoad: false, isError: true };
    case GET_ALL_USERS_SUCCESS:
      return { ...state, users: payload.users, isLoad: false, isError: false };
    case GET_ALL_USERS_LOAD:
      return { ...state, isLoad: true };
    case GET_USER_SUCCESS:
      return "fail";

    default:
      return state;
  }
};

export default userReducer;
