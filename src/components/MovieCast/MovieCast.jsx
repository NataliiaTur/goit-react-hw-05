import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastMovies } from "../../api/getCastMovie";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const { data } = await getCastMovies(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error("Error fetching cast from movie:", error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      {cast.length === 0 ? (
        <p>No actors found for this movie.</p>
      ) : (
        <ul className={css.castList}>
          {cast.slice(0, 8).map((actor) => (
            <li key={actor.id} className={css.castItem}>
              <div>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : defaultImg
                  }
                  alt={actor.name}
                  width="100"
                  className={css.actorImg}
                />
                <p className={css.actorName}>{actor.name}</p>
                <p className={css.actorCharacter}>
                  Character: {actor.character}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
