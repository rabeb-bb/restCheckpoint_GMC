import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../JS/actions/users";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    let confirm = window.confirm("are you sure you want to delete this user?");
    if (confirm) {
      dispatch(deleteUser(user._id));
    }
  };
  return (
    <div className="card">
      <div className="wrapper">
        <div className="top-icons">
          <i className="fas fa-long-arrow-alt-left" />
          <i className="fas fa-ellipsis-v" />
          <i className="far fa-heart" />
        </div>
        <div className="profile">
          <img
            src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
            className="thumbnail"
          />
          <div className="check">
            <i className="fas fa-check" />
          </div>
          <h3 className="name">{user.name}</h3>
          <p className="title">email: {user.email}</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            aliquam aliquid porro!
          </p>
          <div className="editing">
            <button type="button" className="btn" onClick={() => handleClick()}>
              delete
            </button>
            <button type="button" className="btn">
              edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
