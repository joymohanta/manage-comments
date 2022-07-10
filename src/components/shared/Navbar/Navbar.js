import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="parent-menu">
      <NavLink className="child-menu" to="/">
        Home
      </NavLink>
      <NavLink className="child-menu" to="/activecoments">
        Active-Comments
      </NavLink>
      <NavLink className="child-menu" to="/deletedcoments">
        Deleted-Comments
      </NavLink>
    </div>
  );
};

export default Navbar;
