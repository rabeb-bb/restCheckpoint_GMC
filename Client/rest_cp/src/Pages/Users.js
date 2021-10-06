import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../Components/UserCard/UserCard";
import { getAllUsers } from "../JS/actions/users";

const Users = () => {
  const users = useSelector((state) => state.userReducer.users);
  const isLoad = useSelector((state) => state.userReducer.isLoad);
  const isError = useSelector((state) => state.userReducer.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Users</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {isLoad
          ? "loading"
          : isError
          ? "could not fetch data"
          : users.map((el) => <UserCard user={el} key={el._id} />)}
        {console.log(users)}
        {console.log(isLoad)}
        {console.log(isError)}
      </div>
    </div>
  );
};

export default Users;
