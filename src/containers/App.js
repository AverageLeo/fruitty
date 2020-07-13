import React, { Component } from "react";
import { HashRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import FruitLists from "../components/Fruits/FruitsList/FruitsList";
import FruitDetails from "../components/Fruits/FruitDetails/FruitDetails";
import Favorites from "../components/Fruits/Favorites/Favorites";
import NotFound from "../components/NotFound/NotFound";
import Footer from "../components/Footer/Footer";

import "./App.css";
import { requestFruitsActionCreator } from "../actions/actions";
import { connect } from "react-redux";

class App extends Component {
  state = {
    isSignedIn: false,
    user: {
      id: "",
      name: "",
      email: "",
    },
  };

  // fetch fruits upon reload
  componentDidMount() {
    this.props.onRequestFruits();
  }

  loginHandler = () => {
    this.setState({ isSignedIn: true });
  };

  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="content">
            {this.state.isSignedIn === true ? (
              <Link to="/">
                <nav>
                  <button>Log-out</button>
                </nav>
              </Link>
            ) : null}

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

// mapping fruits from requestFruitsReducer to App props

// const mapStateToProps = (state) => {
//   return {
//     fruits: state.requestFruitsReducer.fruits,
//     isPending: state.requestFruitsReducer.isPending,
//   };
// };

// mapping requestFruitsActionCreator to App props
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestFruits: () => {
      return dispatch(requestFruitsActionCreator());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
