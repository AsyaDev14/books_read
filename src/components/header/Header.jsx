import React from "react";
import logo from "../../images/sprite.svg";
import css from "./Header.module.css";
import menu from "../../images/menu.png";
export const Header = () => {
  return (
    <div className="container">
      <div className={css.header_wrapper}>
        <svg width={"40px"} height={"40px"}>
          <use href={`${logo}#icon-Logo`}></use>
        </svg>
        <div className={css.header_wrap}>
          <p>Home</p>
          <p>My Library</p>
        </div>

        <div className={css.header_buttons}>
          <button className={css.header_profile}>|</button>
          <button className={css.header_burger}>
            <img src={menu} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
