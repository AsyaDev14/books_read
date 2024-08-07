import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import css from "./Recommended.module.css";
import sprite from "../../images/sprite.svg";
import { fetchRecommendedBook } from "../../js/Api";
import { nanoid } from "nanoid";

export const Recommended = () => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRecommendedBook();
      setRecommendedBooks(data.results);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className={css.recommend_wrapper}>
        <p className={css.recommend_p}>Filters: </p>
        <form action="">
          <input
            type="text"
            placeholder="Book title:"
            className={css.recommend_input}
          />
          <input
            type="text"
            placeholder="The author:"
            className={css.recommend_input}
          />
          <button type="submit" className={css.recommend_submit}>
            to apply
          </button>
        </form>

        {/* <div> */}
        <div className={css.recommend_box}>
          <h2 className={css.recommend_h}>Start your workout</h2>
          <div className={css.recommend_workout}>
            <svg width="40px" height="40px">
              <use href={`${sprite}#icon-1`}></use>
            </svg>
            <p className={css.recommend_subtitle}>
              Create a personal library:
              <span className={css.recommend_span}>
                &nbsp; add the books you intend to read to it.
              </span>
            </p>
          </div>
          <div className={css.recommend_workout}>
            <svg width="40px" height="40px">
              <use href={`${sprite}#icon-2`}></use>
            </svg>
            <p className={css.recommend_subtitle}>
              Create your first workout:
              <span className={css.recommend_span}>
                &nbsp; define a goal, choose a period, start training.
              </span>
            </p>
          </div>
          <div className={css.recommend_wrap_button}>
            <Link to="/library" className={css.recommend_link}>
              My library
            </Link>
            <svg width={"24px"} height={"24px"}>
              <use href={`${sprite}#icon-log-in`}></use>
            </svg>
          </div>
        </div>
      </div>

      <div className={css.recommended_book_wrap}>
        <div className={css.recomended_book_box}>
          <p className={css.rec_title}>Recommended</p>
          <div className={css.rec_button_wraper}>
            <button className={css.recommend_buttons}>
              <svg width={"16px"} height={"16px"}>
                <use href={`${sprite}#icon-left`}></use>
              </svg>
            </button>
            <button className={css.recommend_buttons}>
              <svg width={"16px"} height={"16px"}>
                <use href={`${sprite}#icon-right`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <ul className={css.book_list}>
            {recommendedBooks?.map((book) => (
              <li key={nanoid()} className={css.book_item}>
                <img
                  src={book.imageUrl}
                  alt="book image"
                  width={"137px"}
                  height={"208px"}
                  className={css.book_image}
                />
                <p className={css.book_title}>{book.title}</p>
                <p className={css.book_author}>{book.author}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
