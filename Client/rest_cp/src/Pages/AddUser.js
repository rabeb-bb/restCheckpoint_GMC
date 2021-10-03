import React, { useEffect, useState } from "react";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { addUser } from "../JS/actions/users";

const AddUser = () => {
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);
  const editUserState = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  useEffect(() => {
    if (params.id) {
      setEdit(true);
    } else {
      setEdit(false);
    }
    edit
      ? setUser(editUserState)
      : setUser({ name: "", lastName: "", phone: "", email: "" });
  }, [edit, editUserState, params.id]);
  const handleClick = (e) => {
    e.preventDefault();
    user.email ? dispatch(addUser(user, history)) : alert("email required");
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2>addUser</h2>
      <form>
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
          />
          <TextField
            type="number"
            id="outlined-basic"
            label="age"
            variant="outlined"
            name="age"
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-basic"
            label="email"
            variant="outlined"
            name="email"
            onChange={handleChange}
          />
        </Box>
        <button onClick={handleClick}>save user</button>
      </form>
    </div>
  );
};

export default AddUser;
