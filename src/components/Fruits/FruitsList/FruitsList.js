import React from "react";
import "./FruitsList.css";

const fruitsList = () => {
  return (
    <div className="fruitsList">
      <div className="heading2">
        <h2>Fruits List</h2>
        <div className="fruitsBox">
          <ul>
            <li>Red Apple</li>
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
