import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer--text">
        <a href="https://www.linkedin.com/in/arie-levental/">
          <i className="fab fa-linkedin footer--margin--left" />
        </a>
        <a href="https://github.com/AverageLeo">
          <i className="fab fa-github" />
        </a>
        <a href="mailto:arieka39@gmail.com">
          <i className="fas fa-envelope" />
        </a>
        <a href="https://arielevental.com">
          <i className="fas fa-beer"></i>
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <i className="fab fa-youtube footer--margin--right"></i>
        </a>
      </div>
    </div>
  );
};

export default footer;
