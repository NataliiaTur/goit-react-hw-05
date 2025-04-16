import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewsMovie } from "../../api/getReviewsMovie";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setError(false);
        const { data } = await getReviewsMovie(movieId);
        setReviews(data.results);
      } catch (error) {
        console.error("Error fetching cast from movie:", error);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      {error && <p>Ops! Something went wrong...</p>}
      {reviews.length === 0 ? (
        <p>No reviews found for this movie.</p>
      ) : (
        <ul className={css.reviewsList}>
          {reviews.map((review) => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
