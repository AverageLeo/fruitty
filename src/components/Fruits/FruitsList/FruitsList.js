import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./FruitsList.css";

const fruitsList = () => {
  return (
    <div className="fruitsList">
      <div className="heading2">
        <h2>Fruits List</h2>
        <NavLink to="/fruitlists">
          <button>Fruits</button>
        </NavLink>
        <NavLink to="/favorites">
          <button>Favorites</button>
        </NavLink>
        <div className="fruitsBox">
          <ul>
            <Link to="/fruitdetails">
              <li>Red Apple</li>
            </Link>
            <li>Green Apple</li>
            <li>Banana</li>
            <li>Pineapple</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default fruitsList;
