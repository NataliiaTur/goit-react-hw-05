import React from "react";
import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../api/getTrendingMovies";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError(false);
        const { data } = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.error("Sorry, don`t found films", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className={css.page}>
      <h1 className={css.title}>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
