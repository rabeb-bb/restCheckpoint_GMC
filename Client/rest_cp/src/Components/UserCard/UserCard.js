import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, getUser } from "../../JS/actions/users";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    let confirm = window.confirm("are you sure you want to delete this user?");
    if (confirm) {
      dispatch(deleteUser(user._id));
    }
  };
  const handleEdit = () => {
    dispatch(getUser(user._id));
  };
  return (
    <div className="wrapper">
      <div className="profile">
        <img
          src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
          className="thumbnail"
        />
        <h3 className="name">{user.name}</h3>
        <p className="title">email: {user.email}</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam
          aliquid porro!
        </p>
        <div className="editing">
          <button type="button" className="btn" onClick={() => handleDelete()}>
            delete
          </button>
          <Link to={`/editUser/${user._id}`}>
            <button
              type="button"
              className="edit-btn"
              onClick={() => handleEdit()}
            >
              edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
