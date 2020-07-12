import React, { Component } from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";

import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
// import FruitsNav from "../components/Fruits/FruitNav/FruitNav";
import FruitLists from "../components/Fruits/FruitsList/FruitsList";
import FruitDetails from "../components/Fruits/FruitDetails/FruitDetails";
import Favorites from "../components/Fruits/Favorites/Favorites";
import NotFound from "../components/NotFound/NotFound";
import Footer from "../components/Footer/Footer";

import "./App.css";

class App extends Component {
  state = {
    isSignedIn: false,
    user: {
      id: "",
      name: "",
      email: "",
    },
  };

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
              <Route path="/fruitDetails" component={FruitDetails} />
              <Route path="/favorites" component={Favorites} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
