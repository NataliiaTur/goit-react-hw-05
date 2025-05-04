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

  const truncateReview = (review, length = 200) => {
    if (review.length <= length) return review;
    return review.slice(0, length) + "...";
  };

  const [expandedReview, setExpandedReview] = useState(null);

  const toggleReview = (id) => {
    setExpandedReview(expandedReview === id ? null : id);
  };

  return (
    <div>
      {error && <p>Ops! Something went wrong...</p>}
      {reviews.length === 0 ? (
        <p>No reviews found for this movie.</p>
      ) : (
        <ul className={css.reviewsList}>
          {reviews.map((review) => (
            <li key={review.id} className={css.reviewItem}>
              <h4>Author: {review.author}</h4>
              <p>
                {expandedReview === review.id
                  ? review.content
                  : truncateReview(review.content)}
              </p>
              {review.content.length > 200 && (
                <button
                  className={css.toggleButton}
                  onClick={() => toggleReview(review.id)}
                >
                  {expandedReview === review.id ? "Show Less" : "Read More"}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
