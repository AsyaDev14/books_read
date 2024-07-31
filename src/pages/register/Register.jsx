import React from "react";
import { useMediaQuery } from "react-responsive";
import css from "./Register.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../images/sprite.svg";
export const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const submit = (data) => {
    console.log(data);
    // dispatch(registrThunk(data));
    reset();
  };
  return (
    <>
      <div className="container">
        <div className={css.register_conatiner}>
          <a href="">
            <svg>
              <use href={`${logo}#icon-Logo`}></use>
            </svg>
          </a>

          <div>
            <h1>Expand your mind, reading a book</h1>
            <form onSubmit={handleSubmit(submit)}>
              <input type="text" placeholder="Name:" {...register("name")} />
              <input type="text" placeholder="Mail:" {...register("email")} />
              <input
                type="password"
                placeholder="Password:"
                {...register("password")}
              />
              <button>Registration</button>

              <Link to="/login"> Already have account? </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
