import React from "react";
import { NavLink } from "react-router-dom";

const favorites = () => {
  return (
    <div className="favorites">
      <div className="heading2">
        <h2>Favorites</h2>
        <NavLink to="/fruitlists">
          <button>Fruits</button>
        </NavLink>
        <NavLink to="/favorites">
          <button>Favorites</button>
        </NavLink>
        <div className="fruitsBox">
          <ul>
            <li>Red Apple</li>
            <li>Banana</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default favorites;
