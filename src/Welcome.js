import React from "react";
import { Outlet, Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      {" "}
      <h1>Welcome</h1>
      <Link to="hello">Click here</Link>
      <Outlet />
    </div>
  );
};

export default Welcome;
