import React from "react";
import { Link } from "react-router-dom";

import "./FruitDetails.css";
import Image from "./Red Apple.png";
import FruitsList from "./fruits.json";

const fruitDetails = (props) => {
  return (
    <div className="fruitsDetails">
      <button
        onClick={() => {
          props.history.goBack();
        }}
      >
        Go Back
      </button>

      <div className="heading2">
        <h2>Fruit Info</h2>
        <img src={Image} alt="fruit" width="100px" />
        <button className="fa fa-star" />
        <button>Show on Wiki</button>
        <div className="infoBox">
          <h3>Overview</h3>
          <ul>
            <li>Red Apple</li>
            <li>Green Apple</li>
            <li>Banana</li>
          </ul>
          <h3>Nutrition</h3>
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

export default fruitDetails;
