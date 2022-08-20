import React from "react";
import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";

export const AboutLink = () => {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestionCircle size={30} />
      </Link>
    </div>
  );
};
