import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./FruitDetails.module.css";
import { writeLocalFavoriteFruitsActionCreator } from "../../../actions/actions";

class FruitDetails extends Component {
  render() {
    const fruitInfo = {
      ...this.props.fruits.find((fruit) => {
        return fruit.name.toLowerCase() === this.props.match.params.name;
      }),
    };

    const imageLink = `${fruitInfo.urlImage}`;
    const fruitNutritions = { ...fruitInfo.nutritions };

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
                this.props.favoriteFruitsNamesList.includes(fruitInfo.name)
                  ? styles.starYellow + " fa fa-star"
                  : styles.starButton + " fa fa-star"
              }
              onClick={() => {
                this.props.onFavoriteClick(
                  fruitInfo.name,
                  this.props.favoriteFruitsNamesList
                );
              }}
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

const mapDispatchToProps = (dispatch) => {
  return {
    onFavoriteClick: (fruitName, favoriteFruitsList) => {
      return dispatch(
        writeLocalFavoriteFruitsActionCreator(fruitName, favoriteFruitsList)
      );
    },
  };
};

const mapStateToProps = (state) => {
  return {
    fruits: state.requestFruitsReducer.fruits,
    favoriteFruitsNamesList: [
      ...state.localFavoriteFruitsReducer.favoriteFruitsNamesList,
    ],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitDetails);
