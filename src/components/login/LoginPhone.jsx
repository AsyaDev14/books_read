import React from "react";
import css from "../../pages/register/Register.module.css";
import iphone from "../../images/iPhone.png";
const LoginPhone = () => {
  return (
    <div className={css.register_phone}>
      <img src={iphone} alt="phone with books" />
    </div>
  );
};

export default LoginPhone;
