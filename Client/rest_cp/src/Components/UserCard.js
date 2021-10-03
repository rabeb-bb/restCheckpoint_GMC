import React from "react";
import "/UserCard.css";

const UserCard = () => {
  return (
    <div>
      <div class="wrapper">
        <div class="top-icons">
          <i class="fas fa-long-arrow-alt-left"></i>
          <i class="fas fa-ellipsis-v"></i>
          <i class="far fa-heart"></i>
        </div>

        <div class="profile">
          <img
            src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
            class="thumbnail"
          />
          <div class="check">
            <i class="fas fa-check"></i>
          </div>
          <h3 class="name">Beverly Little</h3>
          <p class="title">Javascript Developer</p>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            aliquam aliquid porro!
          </p>
          <button type="button" class="btn">
            Hire Me
          </button>
        </div>

        <div class="social-icons">
          <div class="icon">
            <a href="/">
              <i class="fab fa-dribbble"></i>
            </a>
            <h4>12.8k</h4>
            <p>Followers</p>
          </div>

          <div class="icon">
            <a href="#">
              <i class="fab fa-behance"></i>
            </a>
            <h4>12.8k</h4>
            <p>Followers</p>
          </div>

          <div class="icon">
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <h4>12.8k</h4>
            <p>Followers</p>
          </div>
        </div>
      </div>

      <div class="concept">
        concept by
        <a
          href="https://dribbble.com/shots/4346772-Profile-Card"
          target="_blank"
        >
          <i class="fab fa-dribbble"></i> Vijay Verma
        </a>
      </div>
    </div>
  );
};

export default UserCard;
