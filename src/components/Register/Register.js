import React from "react";
import { Link } from "react-router-dom";

import styles from "./Register.module.css";
import Image from "../Fruits/FruitDetails/Red Apple.png";

const register = () => {
  return (
    <div className="register">
      <div className={styles.heading}>
        <h2>Register</h2>
      </div>
      <img className={styles.image} src={Image} alt="fruit" width="200px" />
      <form action="#">
        <div className={styles.input}>
          <span className="input-group-addon">
            <i className={styles.fa + " fa fa-user"}></i>
          </span>
          <input type="text" className="form-control" placeholder="Name" />
        </div>

        <div className={styles.input}>
          <span className="input-group-addon">
            <i className={styles.fa + " fa fa-envelope"}></i>
          </span>
          <input type="email" className="form-control" placeholder="Email" />
        </div>

        <div className={styles.input}>
          <span className="input-group-addon">
            <i className={styles.fa + " fa fa-lock"}></i>
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <Link to="/getFruits">
          <button type="submit" className={styles.button}>
            Register
          </button>
        </Link>
        <h3 className={styles.h3margin}>
          Already have an Account?{" "}
          <Link to="/login">
            <button className={styles.button}>Login Here</button>
          </Link>
        </h3>
      </form>
    </div>
  );
};

export default register;
