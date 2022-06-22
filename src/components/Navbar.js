import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
        <Link to="/login" className="navbar-brand ml-auto">
          Logout
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
