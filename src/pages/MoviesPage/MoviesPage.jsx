import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchMovies } from "../../api/searchMovies.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const handleSearch = (value) => {
    setSearchParams({ query: value });
  };

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setError(null);
        const { data } = await searchMovies(query);
        setMovies(data.results);
      } catch (error) {
        setError("Failed to fetch movies");
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div className={css.page}>
      <SearchForm onSearch={handleSearch} />
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        query && <p className={css.message}>No movies found for "{query}"</p>
      )}
      {error && <p className={css.message}>{error}</p>}
    </div>
  );
};

export default MoviesPage;
