import React,{useEffect,useState} from "react";
import Layout from "../components/Layout";

import "bootstrap/dist/css/bootstrap.min.css";

import * as styles from '../styles/home.module.css'
import { Link } from "gatsby";

export default function Home() {

  const [userData,setUserData] = useState()

  useEffect(async() => {
    const data = await localStorage.getItem("user")
    console.log("Come from main from Localstorage",data);
    setUserData(data)
  },[])

  return (
    <Layout>
      <div>
        <header className={styles.header}>
          <h1>Welcome to Ableton</h1>
          <p>Another way to go deeply into the Music Astronology</p>
          <button>
            <Link className={styles.btnLink} to="/form/signup">
              Register yourself
            </Link>
          </button>
        </header>

        <div className={styles.boxOne}>
          <div className={styles.boxOne_left}>
            <h2>New Autotune</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div className={styles.boxOne_right}></div>
        </div>

        <div className={styles.middle}>
          <h1>New Design... New Sound Engine</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>

        <div className={styles.middle}>
          <h1>Poweful Edite Tools</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>

        <div className={styles.middleImage}></div>

        <div className={styles.boxOne}>
          <div className={styles.boxOne_right}></div>
          <div className={styles.boxOne_left}>
            <h2>New Autotune</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
