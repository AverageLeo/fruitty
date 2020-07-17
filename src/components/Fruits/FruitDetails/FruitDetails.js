import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./FruitDetails.module.css";

const storedFruits = JSON.parse(
  localStorage.getItem("favoriteFruitsNamesList")
);

class FruitDetails extends Component {
  render() {
    // const toggleStarColor = () => {
    //   const currentState = this.state.starButton;
    //   this.setState({ starButton: !currentState });
    // };

    const isFruitFavorited = () => {
      console.log(("storedFruits", storedFruits), "fruitInfo:", fruitInfo.name);
      console.log(storedFruits.includes(fruitInfo.name));
      // const currentState = this.state.starButton;
      // if (storedFruits.includes(fruitInfo.name)) {
      //   this.setState({ starButton: !currentState });
      // }
    };

    const fruitInfo = {
      ...this.props.fruits.find((fruit) => {
        return fruit.name.toLowerCase() === this.props.match.params.name;
      }),
    };
    const imageLink = `${fruitInfo.urlImage}`;
    const fruitNutritions = { ...fruitInfo.nutritions };

    isFruitFavorited();

    return (
      <div className="fruitsDetails">
        <button
          className={styles.goBackButton}
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          Go Back
        </button>

        <div className="heading2">
          <div className={styles.top}>
            <h2>Fruit Info</h2>
            <img className={styles.image} src={imageLink} alt="fruit" />
            <h2>{this.props.match.params.name.toUpperCase()}</h2>
            {/* Favorite Star - toggle the fruit name inside the
              Favorite Fruits array */}
            <button
              className={
                storedFruits.includes(fruitInfo.name)
                  ? styles.starYellow + " fa fa-star"
                  : styles.starButton + " fa fa-star"
              }
              // onClick={toggleStarColor}
            />

            <a
              href={`https://en.wikipedia.org/wiki/${this.props.match.params.name}`}
            >
              <button className={styles.wikiButton}>
                <i className={styles.wikiLogo + " fab fa-wikipedia-w"} />
                Show on Wiki
              </button>
            </a>
          </div>
          <div className={styles.fruitsBox + " " + styles.infoBox}>
            <h3>Overview</h3>
            <div className={styles.tables}>
              <ul>
                <li>
                  <b>Genus:</b> {fruitInfo.genus}
                </li>
                <li>
                  <b>Family:</b> {fruitInfo.family}
                </li>
                <li>
                  <b>Order:</b> {fruitInfo.order}
                </li>
              </ul>
              <h3>Nutrition</h3>
              <ul>
                <li>
                  <b>Calories:</b> {fruitNutritions.calories}
                </li>
                <li>
                  <b>Carbs:</b> {fruitNutritions.carbohydrates}
                </li>
                <li>
                  <b>Fat:</b> {fruitNutritions.fat}
                </li>
                <li>
                  <b>Protein:</b> {fruitNutritions.protein}
                </li>
                <li>
                  <b>Sugar:</b> {fruitNutritions.sugar}
                </li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fruits: state.requestFruitsReducer.fruits,
  };
};

export default connect(mapStateToProps)(FruitDetails);
