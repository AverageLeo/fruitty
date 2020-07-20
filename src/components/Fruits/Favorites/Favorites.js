import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import styled from "styled-components";
import Button from "../../../UI/Button";

import Fruit from "../Fruit/Fruit";

const Title = styled.div`
  font-family: "Bree Serif", serif;
  font-size: 3rem;
  margin: 2rem;
  border-bottom: 2px solid rgba(112, 112, 112, 0.3);
`;

const NavButton = styled(Button)`
  margin: 0 10px;
`;

const FruitsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 60%;
    a {
      text-decoration: none;
      color: #000;
    }
  }
  li {
    list-style: none;
    padding: 5px;
    border: 2px solid rgba(112, 112, 112, 0.3);
    cursor: pointer;
    transition: 0.3s ease-in-out;
    :hover {
      background-color: rgb(221, 255, 208);
    }
  }
`;

const Favorites = (props) => {
  const getFavoriteFruitsItems = () => {
    const favoriteFruits = props.fruits.filter((fruit) => {
      return props.favoriteFruitsNamesList.includes(fruit.name);
    });
    return favoriteFruits.map((fruit) => {
      return (
        <Link
          to={`/fruitdetails/${fruit.name.toLowerCase()}`}
          key={fruit.id}
          genus={fruit.genus}
        >
          <Fruit fruitDetails={fruit} />
        </Link>
      );
    });
  };

  return (
    <div className="favorites">
      <Title>Favorites</Title>
      <NavLink to="/getFruits">
        <NavButton>Fruits</NavButton>
      </NavLink>
      <NavLink to="/favorites">
        <NavButton>Favorites</NavButton>
      </NavLink>

      <FruitsBox>
        <ul>{getFavoriteFruitsItems()}</ul>
      </FruitsBox>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fruits: state.requestFruitsReducer.fruits,
    favoriteFruitsNamesList:
      state.localFavoriteFruitsReducer.favoriteFruitsNamesList,
  };
};

export default connect(mapStateToProps)(Favorites);
