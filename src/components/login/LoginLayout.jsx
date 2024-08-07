import React from "react";
import css from "../../pages/register/Register.module.css";
import logo from "../../images/sprite.svg";
import LoginPhone from "./LoginPhone";

export const LoginLayout = ({ children }) => {
  return (
    <>
      <div className="container">
        <div>
          <div className={css.register_conatiner}>
            <svg width={"40px"} height={"40px"}>
              <use href={`${logo}#icon-Logo`}></use>
            </svg>
            <h1 className={css.register_title}>
              Expand your mind, reading{" "}
              <span className={css.register_span}>a book</span>
            </h1>
            {children}
          </div>
          <LoginPhone />
        </div>
      </div>
    </>
  );
};
