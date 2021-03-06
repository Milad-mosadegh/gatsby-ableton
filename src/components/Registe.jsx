import { Link } from "gatsby";
import React from "react";

import * as style from "../styles/form.module.css";

function Register({connectLink}) {
  return (
    <div className={style.center}>
      <h1>You can Register here!</h1>
      <form className={style.containerSm}>
        <input
          required
          type="text"
          className={style.formInput}
          placeholder="Please Enter your First Name"
        />
        <input
          required
          type="text"
          className={style.formInput}
          placeholder="Please Enter your Last Name"
        />
        <input
          required
          type="date"
          className={style.formInput}
          placeholder="Please Enter your Birthday"
        />
        <input
          required
          type="text"
          className={style.formInput}
          placeholder="Please Enter your Email"
        />
        <input
          required
          type="password"
          className={style.formInput}
          placeholder="Please Enter your password"
        />
        <button className="btn btn-warning btn-block">Register</button>
      </form>
      <div>You have already an account! {connectLink}</div>
    </div>
  );
}

export default Register;
