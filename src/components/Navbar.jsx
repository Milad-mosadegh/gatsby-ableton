import React, { useState, useEffect } from "react";

import { Link } from "gatsby";
import * as styles from "../styles/navbar.module.css";

import { FaFingerprint, FaUserMinus, FaUserAlt } from "react-icons/fa";

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    let data = localStorage.getItem("user");
    const convertData = JSON.parse(data);
    if (convertData) {
      setIsLogin(convertData.isLogin);
      setUser(convertData);
    }
  }, []);

  const scrollHandler = (e) => {
    console.log(e);
  };

  const logoutHandler = () => {
    setIsLogin(false);
    localStorage.setItem("user", isLogin);
    return (window.location.href = "/");
  };

  return (
    <nav onScroll={scrollHandler} className={styles.navbar}>
      {isLogin ? (
        <div className={styles.linkLogo}>
          <p>{user.email}</p>
        </div>
      ) : (
        <div className={styles.linkLogo}>
          <h1>Ableton</h1>
        </div>
      )}
      <div className={styles.navbarBtn}>
        {isLogin ? (
          <>
            <Link className={styles.navbarLink} to="/">
              Home
            </Link>
            <Link className={styles.navbarLink} to="/about">
              Products
            </Link>
            <Link className={styles.navbarLink} to="/contact">
              Contact
            </Link>

            <Link to="/form/signin">
              <FaFingerprint className={styles.loginLogo} />
            </Link>

            <button onClick={logoutHandler}>
              <FaUserMinus className={styles.loginLogo} />
            </button>
          </>
        ) : (
          <>
            <Link className={styles.navbarLink} to="/">
              Home
            </Link>
            <Link to="/form/signin">
              <FaFingerprint className={styles.loginLogo} />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
