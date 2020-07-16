import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import { requestFruitsActionCreator } from "../actions/actions";
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

  logoutHandler = () => {
    fetch("http://localhost:3003/checkAuth/logout", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.user.token,
      },
    }).then(console.log(this.props));
    // .then(this.props.history.push("/login"));
  };

  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="content">
            {/* if statement */}
            <button onClick={this.logoutHandler}>Log-out</button>

            <Switch>
              <Route
                path="/login"
                exact
                component={Login}
                clickLogin={this.loginHandler}
              />
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
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.loginUserReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
