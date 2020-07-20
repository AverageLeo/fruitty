import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import Button from "../../../UI/Button";

import {
  writeLocalFavoriteFruitsActionCreator,
  nutritionRowChangeActionCreator,
} from "../../../actions/actions";
import NutritionRow from "./NutritionRow/NutritionRow";

const GoBackButton = styled(Button)`
  background-color: rgba(255, 255, 255, 0.9);
  margin: 20px 10px;
`;

const WikiButton = styled(Button)`
  margin: 0 10px 10px 10px;
  width: 160px;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 60%;
  margin-right: auto;
  margin-left: auto;
`;

const StarButtonInactive = styled.button`
  background-color: transparent;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: 1px solid #000;
  transition: ease-in 0.2s;
  margin: 20px 10px;
  width: 160px;
  :hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
  :focus {
    outline: 0;
  }
`;

const StarButtonActive = styled(StarButtonInactive)`
  color: rgb(228, 225, 47);
`;

const TablesSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  ul {
    width: 60%;
    padding-inline-end: 40px;
    li {
      list-style: none;
      padding: 5px;
      margin: 5px;
      border: 1px solid lightgray;
      cursor: pointer;
    }
  }
  label {
    display: inline-block;
    width: 100%;
    padding: 5px;
    margin: 5px;
    border: 1px solid lightgray;
  }
`;

const EditButton = styled.span`
  cursor: pointer;
  margin: 5px;
  font-size: 1.1rem;
`;

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
        <GoBackButton
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          Go Back
        </GoBackButton>
        <div className="heading2">
          <TopBox>
            <h2>Fruit Info</h2>
            <img
              src={imageLink}
              alt="fruit"
              style={{ border: "1px solid black", width: "150px" }}
            />
            <h2>{this.props.match.params.name.toUpperCase()}</h2>

            {/* Favorite Star - toggle the fruit name inside the
              Favorite Fruits array */}
            {this.props.favoriteFruitsNamesList.includes(fruitInfo.name) ? (
              <StarButtonActive
                className="fa fa-star"
                onClick={() => {
                  this.props.onFavoriteClick(
                    fruitInfo.name,
                    this.props.favoriteFruitsNamesList
                  );
                }}
              >
                {" Favorite"}
              </StarButtonActive>
            ) : (
              <StarButtonInactive
                className="fa fa-star"
                onClick={() => {
                  this.props.onFavoriteClick(
                    fruitInfo.name,
                    this.props.favoriteFruitsNamesList
                  );
                }}
              >
                {" Favorite"}
              </StarButtonInactive>
            )}

            <a
              href={`https://en.wikipedia.org/wiki/${this.props.match.params.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WikiButton>
                <i
                  className={"fab fa-wikipedia-w"}
                  style={{ marginRight: "5px" }}
                />
                Show on Wiki
              </WikiButton>
            </a>
          </TopBox>
          <TablesSection>
            <h3>Overview</h3>
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
            <form style={{ width: "60%" }}>
              <h3>Nutrition</h3>
              <div style={{ width: "100%", textAlign: "right" }}>
                <EditButton
                  className={"far fa-plus-square"}
                  onClick={() => this.addNutritionHandler(this.props.fruits)}
                />
                <EditButton
                  className={"fas fa-pencil-alt"}
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
          </TablesSection>
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
