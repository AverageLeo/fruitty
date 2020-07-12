import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

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
    isLoggedIn: true,
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">
            <nav>
              <button>Log-out</button>
            </nav>
          </Link>

          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/fruitlists" component={FruitLists} />
            <Route path="/fruitDetails" component={FruitDetails} />
            <Route path="/favorites" component={Favorites} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
