import React from "react";
import "./App.css";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import FruitsNav from "../components/Fruits/FruitNav/FruitNav";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <FruitsNav />
      <Footer />
    </div>
  );
}

export default App;
