import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import {
  requestFruitsActionCreator,
  logoutUserActionCreator,
} from "../actions/actions";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import FruitLists from "../components/Fruits/FruitsList/FruitsList";
import FruitDetails from "../components/Fruits/FruitDetails/FruitDetails";
import Favorites from "../components/Fruits/Favorites/Favorites";
import NotFound from "../components/NotFound/NotFound";
import Footer from "../components/Footer/Footer";

import "./App.css";

class App extends Component {
  // fetch fruits upon reload
  componentDidMount() {
    this.props.onRequestFruits();
  }

  componentDidUpdate() {
    // if (!this.props.user) {
    //   this.props.history.push("/login");
    // }
  }

  logoutHandler = () => {
    this.props.onLogoutUser(this.props.user.token);
  };

  render() {
    let Button;
    if (this.props.user) {
      Button = (
        <button onClick={this.logoutHandler} className="logoutButton">
          Log-out
        </button>
      );
    } else {
      Button = null;
    }
    // console.log(this.props.user);
    return (
      <HashRouter>
        <div className="App">
          <div className="content">
            {Button}
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/getFruits" component={FruitLists} />
              <Route path="/fruitDetails/:name" component={FruitDetails} />
              <Route path="/favorites" component={Favorites} />
              <Redirect exact from="/" to="/login" />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

// mapping requestFruitsActionCreator to App props
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestFruits: () => {
      return dispatch(requestFruitsActionCreator());
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
