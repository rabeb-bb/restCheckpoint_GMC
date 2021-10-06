import React, { useEffect, useState } from "react";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { addUser, getUser, userEdit } from "../JS/actions/users";

const AddUser = () => {
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);

  const editedUser = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  const params = useParams();
  const history = useHistory();
  //load the user into the form after reload
  useEffect(() => {
    dispatch(getUser(params._id));
  }, []);

  useEffect(() => {
    if (params._id) {
      setEdit(true);
    } else {
      setEdit(false);
    }
    edit
      ? setUser(editedUser)
      : setUser({ name: "", lastName: "", phone: "", email: "" });
  }, [edit, editedUser, params._id]);

  const handleClick = () => {
    console.log(params._id);
    // e.preventDefault();
    user.email
      ? !edit
        ? dispatch(addUser(user, history))
        : dispatch(userEdit(params._id, user, history))
      : alert("email required");
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2>{edit ? "editUser" : "addUser"} </h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          value={user.name}
        />
        <TextField
          type="number"
          id="outlined-basic"
          label="age"
          variant="outlined"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-basic"
          label="email"
          variant="outlined"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <button onClick={handleClick}>save user</button>
      </Box>
    </div>
  );
};

export default AddUser;
