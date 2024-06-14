// BackHomeButton.js
import React from "react";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackHomeButton = () => {
  const navigate = useNavigate();

  return (
    <button className="backHomeButton" onClick={() => navigate("/")}>
      <FaArrowLeft />
      <FaHome />
    </button>
  );
};

export default BackHomeButton;
