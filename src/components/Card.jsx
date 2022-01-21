import React from "react";

import * as style from "../styles/card.module.css";

function Card({ btnText, src, title, content }) {
  return (
    <div className={style.myCard}>
      <img src={src} alt="#" />
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
      <button>{btnText}</button>
    </div>
  );
}

export default Card;
