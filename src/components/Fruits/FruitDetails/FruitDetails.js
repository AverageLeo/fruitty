import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./FruitDetails.module.css";
import { writeLocalFavoriteFruitsActionCreator } from "../../../actions/actions";
import NutritionRow from "./NutritionRow/NutritionRow";

class FruitDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
    };
  }

  render() {
    const arrayHtmlcollection = document.getElementsByClassName(
      "nutritionsInfo"
    );
    const arrayArray = [].slice.call(arrayHtmlcollection);
    let arrayArray2;
    if (arrayArray.length) {
      arrayArray2 = arrayArray.value;
    }
    console.log(arrayArray2);

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
                  <span className={styles.editLogo + " far fa-plus-square"} />
                  <span
                    className={styles.editLogo + " fas fa-pencil-alt"}
                    onClick={() => {
                      if (this.state.editMode === false) {
                        this.setState({ editMode: true });
                      } else {
                        this.setState({ editMode: false });
                        // fetch("localhost:3003/fruit/:id/updateNutrition", {
                        //   method: "POST",
                        //   body: new FormData(
                        //     document.getElementsByClassName(styles.form)
                        //   ),
                        // })
                        //   .then((response) => response.text())
                        //   .then((html) => console.log(html))
                        //   .catch((error) => {
                        //     console.log(error);
                        //   });
                      }
                    }}
                  />
                </div>
                Edit mode is <b>{this.state.editMode ? "On" : "Off"}</b>
                {Object.keys(fruitNutritions).map((row) => {
                  return (
                    <NutritionRow
                      nutritionsName={row}
                      nutritionsValue={fruitNutritions[row]}
                      editMode={this.state.editMode}
                      key={fruitNutritions[row]}
                    />
                  );
                })}
                <label>Lorem, ipsum.</label>
                <label>Lorem, ipsum.</label>
                <label>Lorem, ipsum.</label>
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
