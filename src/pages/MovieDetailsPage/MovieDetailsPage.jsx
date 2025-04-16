import React, { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getDetailsMovie } from "../../api/getDetailsMovie";
import { Link } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await getDetailsMovie(movieId);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchDetails();
  }, [movieId]);

  if (!movie) return <p>Try a different search term.</p>;

  return (
    <div className={css.wrapperAllDetail}>
      <div>
        <button
          type="button"
          to={backLinkHref}
          className={css.button}
          onClick={() => navigate(backLinkHref.current)}
        >
          Go back
        </button>

        <div className={css.wrapperImgText}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
            className={css.img}
          />

          <div className={css.wrapperText}>
            <h1>{movie.title}</h1>
            <p>
              <span className={css.wordsByFilm}>Data release: </span>
              {movie.release_date?.slice(0, 4)}
            </p>
            <p>
              <span className={css.wordsByFilm}>Genres: </span>
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>
              <span className={css.wordsByFilm}>Overview:</span>{" "}
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
      <div className={css.wrapperAddInfo}>
        <p className={css.wordsByFilm}>Additional Information</p>
        <Link to="cast" className={css.link}>
          Cast
        </Link>
        <Link to="reviews" className={css.link}>
          Reviews
        </Link>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
