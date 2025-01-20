import React, { useEffect } from "react";
import { UserDataContext } from "../context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserProtected = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return <>{children}</>;
};

export default UserProtected;
