import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
export const Logout = () => {
  const { setUser } = useAuth();

  const navigate = useNavigate();
  const logout = () => {
    setUser({})
    navigate("/login");
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
