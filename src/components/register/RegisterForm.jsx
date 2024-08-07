import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import css from "../../pages/register/Register.module.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { setUserSignUp } from "../../js/Api";
import sprite from "../../images/sprite.svg";

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const navigate = useNavigate();
  const submit = async (data) => {
    try {
      await setUserSignUp(data);
      navigate("/recommended");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className={css.register_form}>
        <input
          type="text"
          placeholder="Name:"
          {...register("name")}
          className={css.register_input}
        />
        <input
          type="text"
          placeholder="Mail:"
          {...register("email")}
          className={css.register_input}
        />
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password:"
          {...register("password")}
          className={css.register_input}
        />
        {showPassword ? (
          <svg
            width={"18px"}
            height={"18px"}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <use href={`${sprite}#icon-eye-off`}></use>
          </svg>
        ) : (
          <svg
            width={"18px"}
            height={"18px"}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <use href={`${sprite}#icon-eye-off`}></use>
          </svg>
        )}

        <div className={css.register_wrapper}>
          <button className={css.register_button} type="submit">
            Registration
          </button>
          <Link to="/login" className={css.register_link}>
            {" "}
            Already have account?{" "}
          </Link>
        </div>
      </form>
    </>
  );
};
