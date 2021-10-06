import axios from "axios";
import {
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_LOAD,
  GET_ALL_USERS_SUCCESS,
  GET_USER_SUCCESS,
} from "../constants/action-types";

export const getAllUsers = () => async (dispatch) => {
  //   const config = {
  //     method: "get",
  //     url: "/api/user",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  dispatch({ type: GET_ALL_USERS_LOAD });
  try {
    let result = await axios.get("/api/user");

    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL });
  }
  //   axios(config)
  //     .then((res) => {
  //       dispatch({ type: GET_ALL_USERS_SUCCESS, payload: res.data });
  //     })
  //     .catch((err) => dispatch({ type: GET_ALL_USERS_FAIL }));
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_LOAD });
  try {
    await axios.delete(`/api/user/${id}`);
    dispatch(getAllUsers());
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL });
  }
};
export const addUser = (user, history) => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_LOAD });
  try {
    await axios.post("/api/user/", user);
    dispatch(getAllUsers());
    history.push("/userList");
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL });
  }
};

export const getUser = (id) => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_LOAD });
  try {
    let res = await axios.get(`/api/user/${id}`);
    dispatch({ type: GET_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL });
  }
};

export const userEdit = (id, user, history) => async (dispatch) => {
  try {
    await axios.put(`/api/user/${id}`, user);
    // dispatch(getAllUsers());
    // history.push("/userList");
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL });
  }
};
