import React from "react";
import ContactForm from "../components/contactForm.jsx";
import Layout from "../components/Layout";


import * as styles from '../styles/contactForm.module.css'

export default function Contact() {
  return (
    <Layout>
      <div className={styles.containerFrom}>
        <h1>Keep in touch</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>

        <ContactForm />
      </div>
    </Layout>
  );
}
