import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(movies);
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "10px" }}
              className={css.image}
            />
            <p
              className={css.title}
              style={{ textAlign: "center", marginTop: "10px" }}
            >
              {movie.title}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
