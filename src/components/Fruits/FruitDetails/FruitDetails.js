import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./FruitDetails.module.css";
import {
  writeLocalFavoriteFruitsActionCreator,
  nutritionRowChangeActionCreator,
} from "../../../actions/actions";
import NutritionRow from "./NutritionRow/NutritionRow";

class FruitDetails extends Component {
  constructor(props) {
    super(props);
    this.nutritionsInfoRowDeleteHandler = this.nutritionsInfoRowDeleteHandler.bind(
      this
    );
    this.addNutritionHandler = this.addNutritionHandler.bind(this);
    this.editNutritionsHandler = this.editNutritionsHandler.bind(this);
    this.state = {
      editMode: false,
      fruitInfo: null,
    };
  }

  nutritionsInfoRowDeleteHandler(nutritionName, fruitInfo) {
    const updatefruitNutritions = { ...fruitInfo.nutritions };
    delete updatefruitNutritions[nutritionName];
    const updatedFruit = Object.assign({}, fruitInfo, {
      nutritions: { ...updatefruitNutritions },
    });

    this.props.onNutritionRowChange(updatedFruit.id, updatedFruit);
  }

  addNutritionHandler(fruits) {
    const fruitInfo = {
      ...fruits.find((fruit) => {
        return fruit.name.toLowerCase() === this.props.match.params.name;
      }),
    };
    const updatedFruit = Object.assign({}, fruitInfo, {
      nutritions: { ...fruitInfo.nutritions, "Hello There": "0" },
    });

    this.props.onNutritionRowChange(updatedFruit.id, updatedFruit);
  }

  editNutritionsHandler() {
    // Get all nutritions names and values
    const updatedNutritionsValues = [].slice
      .call(document.getElementsByClassName("nutritionsInfoValue"))
      .map((x) => x.value);
    const updatedNutritionsNames = [].slice
      .call(document.getElementsByClassName("nutritionsInfoName"))
      .map((x) => x.value);

    // Zip values to names
    const updatedNutritions = Object.assign(
      {},
      ...updatedNutritionsNames.map((name, indexOf) => ({
        [name]: updatedNutritionsValues[indexOf],
      }))
    );

    // Create fruit object updated with new nutritions
    const fruitInfo = {
      ...this.props.fruits.find((fruit) => {
        return fruit.name.toLowerCase() === this.props.match.params.name;
      }),
    };
    const updatedFruit = Object.assign({}, fruitInfo, {
      nutritions: updatedNutritions,
    });

    this.props.onNutritionRowChange(updatedFruit.id, updatedFruit);
  }

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
            >
              {" "}
              Favorite
            </button>

            <a
              href={`https://en.wikipedia.org/wiki/${this.props.match.params.name}`}
              target="_blank"
              rel="noopener noreferrer"
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
              <form className={styles.form}>
                <h3>Nutrition</h3>
                <div className={styles.iconsRow}>
                  <span
                    className={styles.editLogo + " far fa-plus-square"}
                    onClick={() => this.addNutritionHandler(this.props.fruits)}
                  />
                  <span
                    className={styles.editLogo + " fas fa-pencil-alt"}
                    onClick={() => {
                      if (this.state.editMode === false) {
                        this.setState({ editMode: true });
                      } else {
                        this.setState({ editMode: false });

                        // Handle exit edit mode by updating fruits in store and api
                        this.editNutritionsHandler();
                      }
                    }}
                  />
                </div>

                {this.state.editMode
                  ? "Click again to confirm the changes!"
                  : null}

                {Object.keys(fruitNutritions).map((row) => {
                  return (
                    <NutritionRow
                      nutritionsInfoRowDeleteHandler={
                        this.nutritionsInfoRowDeleteHandler
                      }
                      fruitInfo={fruitInfo}
                      nutritionsName={row}
                      nutritionsValue={fruitNutritions[row]}
                      editMode={this.state.editMode}
                      key={Math.floor(Math.random() * 10000000)}
                    />
                  );
                })}
              </form>
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
    onNutritionRowChange: (updatedFruitID, updatedFruit) => {
      return dispatch(
        nutritionRowChangeActionCreator(updatedFruitID, updatedFruit)
      );
    },
  };
};

const mapStateToProps = (state) => {
  return {
    fruits: [...state.requestFruitsReducer.fruits],
    favoriteFruitsNamesList: [
      ...state.localFavoriteFruitsReducer.favoriteFruitsNamesList,
    ],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitDetails);
