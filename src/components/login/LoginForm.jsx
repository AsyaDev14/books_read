import React from "react";
import { useMediaQuery } from "react-responsive";
import css from "../../pages/register/Register.module.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { userSignIn } from "../../js/Api";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const navigate = useNavigate();
  const submit = async (data) => {
    try {
      await userSignIn(data);
      navigate("/recommended");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(submit)} className={css.register_form}>
        <input
          id="email"
          name="email:"
          type="text"
          placeholder="Enter your email"
          {...register("email")}
          className={css.register_input}
        />

        <input
          type="password"
          placeholder="Password:"
          {...register("password")}
          className={css.register_input}
        />
        <div className={css.register_wrapper}>
          <button className={css.register_button}>Log in</button>
          <Link to="/register" className={css.register_link}>
            Don’t have an account?
          </Link>
        </div>
      </form>
    </>
  );
};
