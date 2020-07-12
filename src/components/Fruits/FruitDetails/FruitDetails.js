import React from "react";

import Image from "./Red Apple.png";
import FruitsList from "./fruits.json";

import styles from "./FruitDetails.module.css";

const fruitDetails = (props) => {
  return (
    <div className="fruitsDetails">
      <button
        className={styles.goBackButton}
        onClick={() => {
          props.history.goBack();
        }}
      >
        Go Back
      </button>

      <div className="heading2">
        <div className={styles.top}>
          <h2>Fruit Info</h2>
          <img className={styles.image} src={Image} alt="fruit" />
          <button className={styles.starButton + " fa fa-star"} />
          <button className={styles.wikiButton}>Show on Wiki</button>
        </div>
        <div className={styles.fruitsBox + " " + styles.infoBox}>
          <h3>Overview</h3>
          <div className={styles.tables}>
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
    </div>
  );
};

export default fruitDetails;
