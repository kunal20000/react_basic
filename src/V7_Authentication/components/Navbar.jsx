import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

export const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/orders">My Orders</NavLink>
      {!user.username && <NavLink to="/login">Login</NavLink>}
      {!user.username && <NavLink to="/signup">SignUp</NavLink>}
      {user.username && <NavLink to="/logout">Logout</NavLink>}
    </nav>
  );
};
