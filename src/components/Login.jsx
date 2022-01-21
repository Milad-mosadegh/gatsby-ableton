import { Link } from "gatsby";
import React, { useState } from "react";

import * as style from "../styles/form.module.css";

function Login({ connectLink, myData }) {
  const [state, setState] = useState({
    isLogin: true,
    email: "",
    password: "",
  });
  console.log("This is My Data",state);

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (state.email === myData.email && state.password == myData.password) {
      localStorage.setItem("user", JSON.stringify(state));
      alert(`You are successfuly loged in ${myData.email}`);
      return window.location.href='/';
    }
    alert("Username or Password is Wrong");
    setState({});
  };

  return (
    <div className={style.center}>
      <h1>You can Login here!</h1>


        <form onSubmit={submitHandler} className="container p-5">
          <input
            onChange={changeHandler}
            required
            name="email"
            type="text"
            className="form-control mb-1"
            placeholder="Please Enter your Email"
          />
          <input
            onChange={changeHandler}
            required
            name="password"
            type="password"
            className="form-control mb-1"
            placeholder="Please Enter your password"
          />
          <button type="submit" className="btn btn-warning btn-block">
            Login
          </button>
        </form>

      <div>You don't have any account! {connectLink}</div>
    </div>
  );
}

export default Login;
