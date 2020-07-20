import React, { Component } from "react";
import { connect } from "react-redux";
import {
  withRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {
  requestFruitsActionCreator,
  readLocalFavoriteFruitsActionCreator,
  logoutUserActionCreator,
} from "../actions/actions";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import FruitLists from "../components/Fruits/FruitsList/FruitsList";
import FruitDetails from "../components/Fruits/FruitDetails/FruitDetails";
import Favorites from "../components/Fruits/Favorites/Favorites";
import NotFound from "../components/NotFound/NotFound";
import Footer from "../components/Footer/Footer";

import styled from "styled-components";
import Button from "../UI/Button";

const LogoutButton = styled(Button)`
  color: rgb(87, 87, 87);
  letter-spacing: 0.05rem;
  border: 2px solid rgba(112, 112, 112, 0.3);
  margin: 1rem 1rem;
  :hover {
    background-color: rgba(255, 255, 255, 0.4);
    letter-spacing: 0.15rem;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.props.onFavoriteLoad();
  }

  // fetch fruits upon reload
  componentDidMount() {
    this.props.onRequestFruits();
  }

  componentDidUpdate() {
    // console.log(this.props.user);
    const publicUrls = ["/login", "/register", "/404"];
    const closeForUsersUrls = ["/login", "/register"];
    const url = this.props.history.location.pathname;
    if (!this.props.user) {
      if (!publicUrls.includes(url.toLowerCase())) {
        this.props.history.push("/login");
      }
    } else {
      if (closeForUsersUrls.includes(url.toLowerCase())) {
        // TODO If user is logged in and route is login, change to getfruits
      }
    }
  }

  logoutHandler = () => {
    this.props.onLogoutUser(this.props.user.token);
  };

  render() {
    let Button;
    if (this.props.user) {
      Button = (
        <div>
          {" "}
          Hello {this.props.user.name}!
          <LogoutButton
            Logout
            onClick={this.logoutHandler}
            className="logoutButton"
          >
            Log-out
          </LogoutButton>
        </div>
      );
    } else {
      Button = null;
    }

    return (
      <HashRouter>
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            {Button}
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/getFruits" component={FruitLists} />
              <Route path="/fruitDetails/:name" component={FruitDetails} />
              <Route path="/favorites" component={Favorites} />
              <Redirect exact from="/" to="/login" />
              <Route path="/404" component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

// Mapping requestFruitsActionCreator to App props
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestFruits: () => {
      return dispatch(requestFruitsActionCreator());
    },
    onFavoriteLoad: () => {
      return dispatch(readLocalFavoriteFruitsActionCreator());
    },
    onLogoutUser: (token) => {
      return dispatch(logoutUserActionCreator(token));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.loginUserReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
