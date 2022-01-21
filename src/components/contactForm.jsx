import React from 'react'

import * as styles from "../styles/contactForm.module.css";


export default function ContactForm() {
    return (
      <form className={styles.form}>
        <input type="text" placeholder="Enter your Full Name" />
        <input type="text" placeholder="Enter your Email" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Send to us...</button>
      </form>
    );
}
