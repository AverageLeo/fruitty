import React from "react";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";

const login = (props) => {
  return (
    <div className="login">
      <div className={styles.heading}>
        <h2>Login</h2>
      </div>
      <form action="#">
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
          <button
            type="submit"
            className={styles.button}
            onClick={console.log(props)}
          >
            Login
          </button>
        </Link>
        <h3 className={styles.h3margin}>
          Don't have an Account?{" "}
          <Link to="/register">
            <button className={styles.button}>Register Here</button>
          </Link>
        </h3>
      </form>
    </div>
  );
};

export default login;
