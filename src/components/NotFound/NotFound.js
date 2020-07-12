import React from "react";
import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <div>
      <h1>404 NOT FOUND</h1>
      <Link to="/login">
        {" "}
        <button>Go Back to the site</button>
      </Link>
    </div>
  );
};

export default notFound;
