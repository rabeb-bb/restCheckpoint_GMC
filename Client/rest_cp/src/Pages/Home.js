import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ margin: "5%" }}>
      <h2 style={{ margin: "3%" }}> this is the User app</h2>
      <h3 style={{ margin: "2%" }}>
        check out the users list and add or edit any of them
      </h3>
      <p>
        go to{" "}
        {
          <Link to="/userList" style={{ color: "blue" }}>
            Users List
          </Link>
        }
      </p>
    </div>
  );
};

export default Home;
